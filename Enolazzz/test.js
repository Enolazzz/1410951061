var MessagesDB = DB.create(__dirname + "/messages.db");

// 儲存留言
server.post("/messages", (req, res) => {
    const newMessage = {
      username: req.body.username,
      message: req.body.message,
      timestamp: new Date(),
    };
    MessagesDB.insert(newMessage).then((result) => {
      res.status(201).send(result);
    }).catch((err) => {
      res.status(500).send("Error saving message!");
    });
  });
  
  // 獲取所有留言
  server.get("/messages", (req, res) => {
    MessagesDB.find({}).sort({ timestamp: -1 }).then((messages) => {
      res.send(messages);
    }).catch((err) => {
      res.status(500).send("Error fetching messages!");
    });
  });

  const { createApp, ref, onMounted } = Vue;

const messageBoardApp = createApp({
  setup() {
    // 定義響應式變數
    const username = ref("");
    const message = ref("");
    const messages = ref([]);

    // 獲取留言
    const fetchMessages = async () => {
      try {
        const response = await fetch("/messages");
        if (response.ok) {
          messages.value = await response.json();
        } else {
          alert("無法載入留言！");
        }
      } catch (error) {
        console.error(error);
        alert("載入留言時發生錯誤！");
      }
    };

    // 提交留言
    const submitMessage = async () => {
      if (username.value && message.value) {
        try {
          const response = await fetch("/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username.value, message: message.value })
          });
          if (response.ok) {
            await fetchMessages(); // 刷新留言
            username.value = ""; // 清空輸入欄
            message.value = "";
          } else {
            alert("提交失敗！");
          }
        } catch (error) {
          console.error(error);
          alert("提交留言時發生錯誤！");
        }
      } else {
        alert("請填寫所有欄位！");
      }
    };

    // 使用 onMounted 鉤子初始化留言板
    onMounted(() => {
      fetchMessages();
    });

    // 將變數和函數暴露給模板
    return {
      username,
      message,
      messages,
      fetchMessages,
      submitMessage
    };
  }
}).mount("#messageBoard");