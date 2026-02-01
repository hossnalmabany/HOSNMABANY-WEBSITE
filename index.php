<?php
/**
 * HOSNMABANY-WEBSITE Main Template
 */
$lang = $_GET['lang'] ?? 'ar';
$dir = ($lang == 'ar') ? 'rtl' : 'ltr';
?>
<!DOCTYPE html>
<html lang="<?php echo $lang; ?>" dir="<?php echo $dir; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HOSNMABANY-WEBSITE | حصن مباني للمقاولات العامة</title>
    <!-- سيتم تحميل React Engine هنا -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="root">
        <!-- يتم رندرة المحتوى بواسطة React و PHP API -->
    </div>
    
    <!-- تضمين المحرك الأمامي -->
    <script type="module" src="index.tsx"></script>
</body>
</html>