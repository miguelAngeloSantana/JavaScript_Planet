import CardPost from "./components/CardPost";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div>
      <Categories />
      <div className="flex gap-12">
        <CardPost />
        <Menu />
      </div>
    </div>
  );
}
