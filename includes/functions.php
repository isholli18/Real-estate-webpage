
<?php
function getFeaturedProperties() {
    global $pdo;
    $stmt = $pdo->query("SELECT * FROM properties WHERE featured = 1");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function getProperty($id) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM properties WHERE id = ?");
    $stmt->execute([$id]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function searchProperties($search) {
    global $pdo;
    $search = "%$search%";
    $stmt = $pdo->prepare("SELECT * FROM properties WHERE title LIKE ? OR location LIKE ?");
    $stmt->execute([$search, $search]);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}
