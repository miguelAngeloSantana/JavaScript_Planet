import CardPost from "@/components/CardPost";
import Menu from "@/components/Menu";

export default function page() {
  return (
    <div>
        <h1 className="text-base font-medium text-center md:text-left mb-8 pb-2 border-b-2">Categorie Blog</h1>
        <div className="flex">
            <CardPost />
            <Menu />
        </div>
    </div>
  )
}
