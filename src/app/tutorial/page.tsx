import Card from "@/app/components/card";

export default async function Page() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold">Blog</h1>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eaque iure
      vero maiores voluptatum facere. Nobis impedit enim laudantium unde
      expedita ratione tenetur, laboriosam illo, beatae eveniet est. Optio,
      nisi.
      <div className="container mx-auto mt-5">
        <Card />
      </div>
    </div>
  );
}
