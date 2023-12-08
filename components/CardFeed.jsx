"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function CardFeed({ title, content }) {
  return (
    <Card className="mt-20 sm:w-50 lg:w-80">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" className="mb-2 text-red-700">
          {title}
        </Typography>
        <Typography>{content}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <button className="bg-red-700 p-2 text-white rounded">Read More</button>
      </CardFooter>
    </Card>
  );
}
