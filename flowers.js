function canPlaceFlowers(flowerbed, n) {
   if (n === 0) return true;
   const len = flowerbed.length;

   for(let i = 0; i < len; i++){
    
    if (flowerbed[i] === 0){
        const emptyLeft = (i === 0) || flowerbed[i - 1] === 0;
        const emptyRight = (i === len - 1) || flowerbed[i + 1] === 0;

    if (emptyLeft && emptyRight){
        flowerbed[i] = 1;
        n--;
        if (n === 0) return true;
        i++;
    }
   }
}
return false;

}
console.log(canPlaceFlowers([1,0,0,0,1], 5)); 

