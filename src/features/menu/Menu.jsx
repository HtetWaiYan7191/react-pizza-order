import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
export async function loader() {
  const menu = await getMenu();
  return menu;
}
function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="w-[70%] mx-auto">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
