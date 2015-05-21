using System.Collections.Generic;

namespace RomanNumeralsConverterKata
{
    public class RomanNumeralsConverter
    {
        private static readonly Dictionary<int, string> Map = new Dictionary<int, string>
        {
            {1000, "M"},
            {900, "CM"},
            {500, "D"},
            {400, "CD"},
            {100, "C"},
            {90, "XC"},
            {50, "L"},
            {40, "XL"},
            {10, "X"},
            {9, "IX"},
            {5, "V"},
            {4, "IV"},
            {1, "I"}
        }; 

        public string ToRoman(int arabic)
        {
            var result = "";
            foreach (var p in Map)
            {
                while (p.Key <= arabic)
                {
                    result += p.Value;
                    arabic -= p.Key;
                }
            }

            return result;
        }
    }
}