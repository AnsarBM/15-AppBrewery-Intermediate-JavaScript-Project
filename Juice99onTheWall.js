function juice99(start){
   var initial,count;
   count = initial = start;
    while(count >= 0){

        if (count === 1){
        var lyrics = `${count} bottles of juice on the wall, ${count} bottles of juice. \nTake one down and pass it around, no more bottles of juice on the wall.`; 
                      
        } else if (count === 0){
          var lyrics = `No more bottles of juice on the wall, no more bottles of juice. \nGo to the store and buy some more, ${count + initial} bottles of juice on the wall.`;
                         
        } else {
          var lyrics = `${count} bottles of juice on the wall, ${count} bottles of juice. \nTake one down and pass it around, ${count-1} bottles of juice on the wall.`;
                      
        }
        console.log(lyrics);
        count--;
    }
}

juice99(100);