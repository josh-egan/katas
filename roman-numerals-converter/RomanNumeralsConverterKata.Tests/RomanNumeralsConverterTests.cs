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
        public void can_convert_arabic_to_roman(int arabic, string expectedRoman)
        {
            Assert.That(_converter.ToRoman(arabic), Is.EqualTo(expectedRoman));
        }
    }
}
