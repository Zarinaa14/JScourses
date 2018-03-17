 Разработать структуру данных "дерево" и создать дерево. Создать скрипт, 
который выведет многоуровневый список из получившегося дерева.

 var DOM = (function() {
    var str = "",
        count = 0;
    
    return function(node, n) {
        for (var i = 0; i < count; i++) {
            str += '<span>|---</span>';
        }
        
        str += '<b>' + node.nodeName.toLowerCase() + '</b>';

        if (node.id) {
            str += '[#' + node.id + ']';
        }

        if (node.className) {
            str += '(' + node.className + ')'
        }
               
        if (typeof n === 'number') {
            str += '<span>[узел  #' + n + ']</span>';
        }

        str += '<br>';
        count++;

        [].forEach.call(node.children, function(node, childNumber) {
            DOM(node, childNumber);
        });

        count--;
        return str;
    };
})();

document.getElementById('dom-tree').innerHTML = DOM(document.body);
  
 