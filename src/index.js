module.exports = function check(str, bracketsConfig) {
	str=str.split("");
	if (str.length%2==1) return false;
	var count=[];
	for (var i=0; i<str.length; i++) { //проходит по строке
		for (var y=0; y<bracketsConfig.length; y++) { // проходит по конфигурации
			if (str[i]==bracketsConfig[y][1]&&count[count.length-1]==bracketsConfig[y][0]) {
			count.pop(); //если символ в троке совпадает со вторым символом в шаблоне и символ в count 
			// совпадает с первым символом в шаблоне удаляет из массива 
			}else if (str[i]==bracketsConfig[y][0]) {// если символ в строке совпадает с первым символом
			// в шаблоне то удаляет из count
			count.push(str[i]);}
		}
	}
	return count==0;
}
