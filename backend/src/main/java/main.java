import com.google.gson.Gson;

import static spark.Spark.*;

public class main {
    public static void main(String args[]){
        Gson gson = new Gson();

        port(4000);
        get("/getItems", (req, res) -> {
         return gson.toJson(new ItemsDAO().getItems());
        });

        post("/addItem", (req, res) -> {
            ItemListDTO item = gson.fromJson(req.body(), ItemListDTO.class);

            System.out.println(item.item);
            return gson.toJson(new ItemsDAO().addItem(item.item));
        });

        post("/removeItem", (req, res) -> {
            ItemListDTO item = gson.fromJson(req.body(), ItemListDTO.class);

            System.out.println(item.item);
            return gson.toJson(new ItemsDAO().removeItem(item.item));
        });

    }
}
