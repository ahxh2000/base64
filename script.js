// 编码按钮点击事件处理程序
document.getElementById('encodeBtn').addEventListener('click', function () {
    var inputText = document.getElementById('inputText').value.trim();
    if (inputText === '') {
      showError('请输入要编码的内容');
      return;
    }
  
    try {
      var encodedText = btoa(inputText);
      document.getElementById('outputText').value = encodedText;
    } catch (error) {
      showError('编码时出现错误');
    }
  });
  
  // 解码按钮点击事件处理程序
  document.getElementById('decodeBtn').addEventListener('click', function () {
    var inputText = document.getElementById('inputText').value.trim();
    if (inputText === '') {
      showError('请输入要解码的内容');
      return;
    }
  
    try {
      var decodedText = atob(inputText);
      document.getElementById('outputText').value = decodedText;
    } catch (error) {
      showError('解码时出现错误');
    }
  });
  
  // 复制按钮点击事件处理程序
  document.getElementById('copyBtn').addEventListener('click', function () {
    var outputText = document.getElementById('outputText');
    if (outputText.value === '') {
      showError('没有要复制的内容');
      return;
    }
  
    outputText.select();
    document.execCommand('copy');
    alert('结果已复制到剪贴板');
  });
  
  // 交换按钮点击事件处理程序
  document.getElementById('swapBtn').addEventListener('click', function () {
    var inputText = document.getElementById('inputText').value;
    var outputText = document.getElementById('outputText').value;
    document.getElementById('inputText').value = outputText;
    document.getElementById('outputText').value = inputText;
  });
  
  // 显示错误信息
  function showError(message) {
    alert('错误：' + message);
  }