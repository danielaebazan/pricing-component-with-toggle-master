document.getElementById('toggleSwitch').addEventListener('change', function () {
    const monthlyElements = document.querySelectorAll('.monthly');
    const annuallyElements = document.querySelectorAll('.annually');

    if (this.checked) {
      monthlyElements.forEach(element => element.style.display = 'inline-block');
      annuallyElements.forEach(element => element.style.display = 'none');
    } else {
      monthlyElements.forEach(element => element.style.display = 'none');
      annuallyElements.forEach(element => element.style.display = 'inline-block');
    }
  });

