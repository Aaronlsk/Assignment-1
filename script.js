let slideIndex = 0;
const images = ["https://i.pinimg.com/originals/49/db/a1/49dba10ea66ec36ad4f396f2225ed02e.png", "https://cdn.myanimelist.net/images/characters/15/511687.jpg", "https://otakotaku.com/asset/img/character/2023/03/mem-cho-6421824c9bb55p.jpg"];
const texts = ["Determined to fufill her dream, Ruby manages to reform Ai Hoshino's idol group and do what she also wanted since she was young, performing as an idol in front of millions just like her favourite idol Ai.", "A prodigious child actress turned Idol, Kana had many setbacks and doubts before ultimately accepting herself and becoming a new happy member of the new B-Komachi as the group's center.", "Formerly a popular streamer who missed her chance at being an idol due to family circumstances, Mem-Cho was scouted and recruited into the new B-Komachi and finally following her dream."];
const signatures = ["Ruby", "Kana", "Mem-Cho"];

function showSlide() {
    const circles = document.querySelector('.circle img');
    const rectangles = document.querySelector('.rectangle .text');
    const signature = document.querySelector('.rectangle .signature');

    circles.style.display = 'none';
    rectangles.style.display = 'none';
    signature.style.display = 'none';

    slideIndex = (slideIndex + images.length) % images.length;
    circles.src = images[slideIndex];
    rectangles.textContent = texts[slideIndex];
    signature.textContent = signatures[slideIndex];

    circles.style.display = 'block';
    rectangles.style.display = 'block';
    signature.style.display = 'block';
    }

    function prevSlide() {
        slideIndex--;
        showSlide();
    }

    function nextSlide() {
        slideIndex++;
        showSlide();
        }

    showSlide();