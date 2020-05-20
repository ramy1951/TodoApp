package main;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ItemsDAO {
    private static List<String> Items = new ArrayList<>();

    public List<String> getItems(){
        return Items;
    }

    public List<String> addItem(String item){
        Items.add(item);
        return getItems();
    }

    public List<String> removeItem(String item){
        Items =  Items.stream()
                .filter(i -> !i.equals(item))
                .collect(Collectors.toList());

        return getItems();
    }
}
