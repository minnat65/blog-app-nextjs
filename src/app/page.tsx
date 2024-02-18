import BlogsList from "./blogs/page";

export default function Home() {
  return (
    <div>
      <div className="grid" style={{ height: '90%' }}>
        <BlogsList />
      </div>
    </div>
  );
}
