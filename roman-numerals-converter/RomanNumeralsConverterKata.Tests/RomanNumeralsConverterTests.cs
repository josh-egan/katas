using NUnit.Framework;

namespace RomanNumeralsConverterKata.Tests
{
    [TestFixture]
    public class RomanNumeralsConverterTests
    {
        private RomanNumeralsConverter _converter;

        [SetUp]
        public void Setup()
        {
            _converter = new RomanNumeralsConverter();
        }

        [TestCase(1,"I")]
        [TestCase(2,"II")]
        [TestCase(3,"III")]
        [TestCase(4,"IV")]
        [TestCase(5,"V")]
        [TestCase(7,"VII")]
        [TestCase(9,"IX")]
        [TestCase(10,"X")]
        [TestCase(14,"XIV")]
        [TestCase(15,"XV")]
        [TestCase(19,"XIX")]
        [TestCase(24,"XXIV")]
        [TestCase(28,"XXVIII")]
        [TestCase(33,"XXXIII")]
        [TestCase(40,"XL")]
        [TestCase(50,"L")]
        [TestCase(90,"XC")]
        [TestCase(100,"C")]
        [TestCase(400,"CD")]
        [TestCase(500,"D")]
        [TestCase(900,"CM")]
        [TestCase(1000,"M")]
        [TestCase(1333,"MCCCXXXIII")]
        [TestCase(1999,"MCMXCIX")]
        [TestCase(1649,"MDCXLIX")]
        public void can_convert_arabic_to_roman(int arabic, string expectedRoman)
        {
            Assert.That(_converter.ToRoman(arabic), Is.EqualTo(expectedRoman));
        }

        [TestCase("I", 1)]
        public void can_convert_roman_to_arabic(string roman, int expectedArabic)
        {
            Assert.That(_converter.ToArabic(roman), Is.EqualTo(expectedArabic));
        }
    }
}
