
<?php
require_once 'config/database.php';
require_once 'includes/functions.php';
$properties = getFeaturedProperties();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Estate Albania</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <main>
        <section class="hero">
            <h1>Find Your Dream Property in Albania</h1>
            <div class="search-container">
                <form action="properties.php" method="GET">
                    <input type="text" name="search" placeholder="Search properties...">
                    <button type="submit">Search</button>
                </form>
            </div>
        </section>

        <section class="featured-properties">
            <h2>Featured Properties</h2>
            <div class="property-grid">
                <?php foreach($properties as $property): ?>
                    <div class="property-card">
                        <img src="<?php echo htmlspecialchars($property['image_url']); ?>" alt="<?php echo htmlspecialchars($property['title']); ?>">
                        <h3><?php echo htmlspecialchars($property['title']); ?></h3>
                        <p class="price">€<?php echo number_format($property['price']); ?></p>
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
