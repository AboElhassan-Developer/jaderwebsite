 const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      });

      const boxes = document.querySelectorAll('.service-box');
      boxes.forEach(box => {
        box.classList.add('hidden'); // نخليهم متخفيين الأول
        observer.observe(box); // نراقبهم
      });