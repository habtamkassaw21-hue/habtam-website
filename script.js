console.log("ጃቫስክሪፕቱ ከዴስክቶፕ ላይ በትክክል እየሠራ ነው!");

// ገጹ ሲጫን አኒሜሽኑ እንዲሠራ ማድረግ
window.addEventListener('DOMContentLoaded', () => {
    
   // የርዕሱን ከለር ብቻ እንዲቀይር ማድረግ
const headerTitle = document.querySelector('header h1');
if (headerTitle) {
    headerTitle.style.color = '#ff9800'; // ርዕሱን ወደ ቢጫ ከለር ይቀይረዋል
}

    // 2. በAbout ገጽ ላይ ያለው ነጩ ካርድ (ዲቭ) ተንቀሳቅሶ እንዲገባ ማድረግ
    // በምስሉ ላይ እንዳየሁት ዋናው ይዘትህ ያለበት ክፍል class="section" ወይም tag ላይ ነው
    const mainContent = document.querySelector('.section') || document.querySelector('div');
    
    if (mainContent) {
        // መጀመሪያ እንዳይታይ ማድረግ
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        mainContent.style.transition = 'all 1.5s ease-out';

        // ከጥቂት ሚሊሰከንዶች በኋላ ሾልኮ እንዲገባ ማድረግ (Fade in effect)
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 200);
    }
});
// ባለ 3 መስመሯ ቁልፍ ስትነካ ማውጫው እንዲከፈትና እንዲዘጋ ማድረግ
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // ቁልፉ እና ማውጫው በገጹ ላይ መኖራቸውን ማረጋገጫ
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }
});
