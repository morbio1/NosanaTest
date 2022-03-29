abc_sort_open = false;
data_sort_open = false;
 
function show_data_sort() {
            if (abc_sort_open) {
               $(".abc_sort").slideToggle('fast');
               abc_sort_open = false;
            }
             
            $(".data_sort").slideToggle('fast');
            if (data_sort_open) {
                data_sort_open = false;
                return;
            }
            data_sort_open = true;
}
function show_abc_sort() {
           if (data_sort_open) {
               $(".data_sort").slideToggle('fast');
               data_sort_open = false;
           }
            
           $(".abc_sort").slideToggle('fast');
           if (abc_sort_open) {
               abc_sort_open = false;
               return;
           }
           abc_sort_open = true;
