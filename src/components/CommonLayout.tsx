import { Link, Outlet } from "react-router";

export function CommonLayout() {
  return (
    <>
      <nav>
        <Link to={"/"}>Index page</Link>
        <Link to={"/foo"}>Foo page</Link>
        <Link to={"/bar"}>Bar page</Link>
        <Link to={"/bar/123"}>Bar 123 page</Link>
        <Link to={"/this-page-dont-exist"}>
          Link to a page that don't exist
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
