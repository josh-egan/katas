using System.Collections.Generic;

namespace RomanNumeralsConverterKata
{
    public class RomanNumeralsConverter
    {
        private static readonly Dictionary<int, string> Map = new Dictionary<int, string>
        {
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
