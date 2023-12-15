import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";
import { authOptions } from "@/lib/auth";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function POST(request) {
  const startTime = Date.now();
  let page = request.nextUrl.searchParams.get("page");
  if (!page) {
    page = 1;
  }

  if (page < 1 || isNaN(page)) {
    return NextResponse.json({
      success: true,
      data: [],
    });
  }

  const formData = await request.formData();

  const searchResults = await prisma.$queryRaw`
  SELECT
    'post' AS type,
    id,
    "authorId",
    title,
    content,
    url,
    "createdAt"
  FROM "Post"
  WHERE title ILIKE '%' || ${formData.get("search")} || '%'
  UNION ALL
  SELECT
    'layanan' AS type,
    id,
    "categoryId",
    name,
    content,
    slug,
    "createdAt"
  FROM "Layanan"
  WHERE name ILIKE '%' || ${formData.get("search")} || '%'
  ORDER BY "createdAt" DESC
  LIMIT ${parseInt(process.env.PAGINATION_SEARCH)}
  OFFSET ${(parseInt(page) - 1) * parseInt(process.env.PAGINATION_SEARCH)}
`;

  const totalCount = await prisma.$queryRaw`
SELECT
  COUNT(*) AS total
FROM (
  SELECT id FROM "Layanan" WHERE name ILIKE '%' || ${formData.get(
    "search"
  )} || '%'
  UNION ALL
  SELECT id FROM "Post" WHERE title ILIKE '%' || ${formData.get(
    "search"
  )} || '%'
) AS combined
`;

  const finishTime = new Date(Date.now() - startTime);

  return NextResponse.json({
    success: true,
    timeExecute: parseFloat(parseFloat(finishTime / 1000).toFixed(2)),
    count: parseInt(totalCount[0].total),
    data: searchResults,
  });
}
