chrome.system.cpu.getInfo((cpu) => {
    const architecture = cpu.archName
    const modelName = cpu.modelName
    const numOfProcessors = cpu.numOfProcessors
    document.getElementById('architecture').innerText = architecture
    document.getElementById('model-name').innerText = modelName
    document.getElementById('num-of-processors').innerText = numOfProcessors

});
chrome.system.memory.getInfo((memory) => {
    const capacity = memory.capacity / 1000000000
    const availableCapacity = memory.availableCapacity / 1000000000
    document.getElementById('capacity').innerText = capacity
});

