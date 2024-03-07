// احضر قائمة الروابط
var links = document.querySelectorAll('nav ul li a');

// اضافة الحدث
links.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        // تغيير خلفية الرابط عند تحريك الماوس
        this.style.backgroundColor = '#f2f2f2';
    });

    link.addEventListener('mouseout', function() {
        // استعادة الخلفية الافتراضية عند انتهاء تحريك الماوس
        this.style.backgroundColor = '';
    });
});
var sections = document.querySelectorAll('section');

sections.forEach(function(section) {
    section.addEventListener('mouseover', function() {
        //لتكبير العنصر
        this.style.transform = 'scale(1.1)';
        //اضافة ظلال عند تحريك الماوس فوق العنصر
        this.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
        //اضافة تاثير تدريجي للتغيرات
        this.style.transition = 'transform 0.5s, box-shadow 0.5s';
    });

    section.addEventListener('mouseout', function() {
        //تعيد تعين القيم الافتراضية 
        
        this.style.transform = '';
        //يزيل التحويلات والظلال التي تم اضافتها
        this.style.boxShadow = '';
    });
});
