
<?php
#require_once 'config/database.php';
require_once 'includes/functions.php';

$search = isset($_GET['search']) ? $_GET['search'] : '';
$properties = $search ? searchProperties($search) : getFeaturedProperties();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Properties - Real Estate Albania</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <main>
        <section class="properties-list">
            <h1>Properties</h1>
            <div class="property-grid">
                <?php foreach($properties as $property): ?>
                    <div class="property-card">
                        <img src="<?php echo htmlspecialchars($property['image_url']); ?>" alt="<?php echo htmlspecialchars($property['title']); ?>">
                        <h3><?php echo htmlspecialchars($property['title']); ?></h3>
                        <p class="price"><?php echo htmlspecialchars($property['price']); ?></p>
                        <p class="location"><?php echo htmlspecialchars($property['location']); ?></p>
                        <a href="property.php?id=<?php echo $property['id']; ?>" class="btn">View Details</a>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>
    </main>

    <?php include 'includes/footer.php'; ?>
    <script src="assets/js/main.js"></script>
</body>
</html>
