<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: white;
            color: black;
            transition: background-color 0.3s, color 0.3s;
        }
        
        .form {
            background-color: rgba(173, 162, 212, 0.822);
            width: 100%;
            padding: 40px;
            margin: 8px auto;
            border: 1px solid #0a0202;
            border-radius: 4px;
            box-sizing: border-box;
        }

        input[type=text], select {
            width: 200%;
            padding: 12px 20px;
            margin: 20px 0;
            display: inline-flex;
            border-radius: 4px;
            box-sizing: border-box;
        }

        button {
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            background-color: #0a0202;
            color: white;
            cursor: pointer;
            border-left: 200%;
        }

        button:hover {
            background-color: #333;
        }

        body.dark {
            background-color: #333;
            color: white;
        }

        .form.dark {
            background-color: #444;
            border-color: #fff;
        }

        input[type=text].dark {
            background-color: #555;
            border: 1px solid #666;
            color: white;
        }
    </style>
</head>
<body>
    <div class="form">
        
        <button onclick="toggleTheme()">Mode</button>
        <form action="action_page.php">
            <table>
            <tr><td><label for="fname">First Name:</label></td>
          <td>  <input type="text" id="fname" name="firstname"><br></td></tr>
            
            <tr><td><label for="email">Email:</label></td>
            <td><input type="text" id="email" name="email"><br></td></tr>
            
           <tr><td><label for="feedback">Feedback:</label></td>
          <td> <input type="text" id="feedback" name="feedback"><br></table></td></tr>
            
            <button type="submit">Send</button><br>
        </form>
    </table>
    </div>

    <script>
        function toggleTheme() {
            document.body.classList.toggle('dark');
            const form = document.querySelector('.form');
            form.classList.toggle('dark');
            const inputs = document.querySelectorAll('input[type=text]');
            inputs.forEach(input => input.classList.toggle('dark'));
        }
    </script>
</body>
</html>
