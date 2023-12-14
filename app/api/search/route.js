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
    authorId AS author_id,
    title,
    content,
    url,
    createdAt
  FROM post
  WHERE title LIKE ${`%${formData.get("search")}%`}
  UNION ALL
  SELECT
    'layanan' AS type,
    id,
    categoryId AS category_id,
    name,
    content,
    slug,
    createdAt
  FROM layanan
  WHERE name LIKE ${`%${formData.get("search")}%`}
  ORDER BY createdAt DESC
  LIMIT ${parseInt(process.env.PAGINATION_SEARCH)}
  OFFSET ${(parseInt(page) - 1) * parseInt(process.env.PAGINATION_SEARCH)}
`;

  const totalCount = await prisma.$queryRaw`
SELECT
  COUNT(*) AS total
FROM (
  SELECT id FROM layanan WHERE name LIKE ${`%${formData.get("search")}%`}
  UNION ALL
  SELECT id FROM post WHERE title LIKE ${`%${formData.get("search")}%`}
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
