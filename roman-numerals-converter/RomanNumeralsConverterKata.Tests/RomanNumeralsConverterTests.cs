using NUnit.Framework;

namespace RomanNumeralsConverterKata.Tests
{
    [TestFixture]
    public class RomanNumeralsConverterTests
    {
        [Test]
        public void can_convert_arabic_to_roman()
        {
            var converter = new RomanNumeralsConverter();

            Assert.That(converter.ToRoman(1), Is.EqualTo("I"));
        }
    }
}
