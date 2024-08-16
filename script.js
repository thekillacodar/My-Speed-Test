
// Get the elements
const speedCounter = document.getElementById ('speed_counter');
const runTestBtn = document.getElementById('run_test_btn');
const speedDetails1 = document.getElementById('speed_details1');
const speedDetails2 = document.getElementById('speed_details2');
const speedDetails3 = document.getElementById('speed_details3');

// Add event listener to the button
runTestBtn.addEventListener('click', runSpeedTest);

// Function to run the speed test
function runSpeedTest() {
// Generate random values
const ping = Math.floor(Math.random() * 100);
const upload = Math.floor(Math.random() * 100);
const download = Math.floor(Math.random() * 100);

// Update the input fields
speedCounter.value = 'Running...';
setTimeout(() => {
speedCounter.value = 'Complete';
speedDetails1.value = ping + ' ms';
speedDetails2.value = upload + ' Mbps';
speedDetails3.value = download + ' Mbps';
runTestBtn.textContent = 'Rerun';
}, 2000); // wait 2 seconds before updating the values
}
