const head = `
<head>
    <meta charset="UTF-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui" />
    <title>Load confirmation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#dc2626',
          }
        }
      }
    }
  </script>
    </head>
    `;
export const InvoiceDataTemplate = () => `
<html>
${head}
<body>
<div>c
<h1 class="text-clifford">hello nodejs23</h1>
</div>
</body>
</html>
`;
