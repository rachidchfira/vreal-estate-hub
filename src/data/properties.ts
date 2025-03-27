export interface Property {
  id: string;
  title: string;
  titleVi: string;
  description: string;
  descriptionVi: string;
  price: number;
  location: string;
  locationVi: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  type: string;
  typeVi: string;
  status: string;
  statusVi: string;
  yearBuilt: number;
  images: string[];
  features: string[];
  featuresVi: string[];
  isFeatured: boolean;
}

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "Luxury Penthouse vivo",
    titleVi: "Căn hộ Penthouse Sang Trọng với Tầm Nhìn Toàn Cảnh",
    description: "Experience unparalleled luxury in this stunning penthouse located in the heart of District 1. Featuring floor-to-ceiling windows, high-end finishes, and breathtaking views of the city skyline and Saigon River.",
    descriptionVi: "Trải nghiệm sự sang trọng không gì sánh bằng trong căn penthouse tuyệt đẹp này nằm ở trung tâm Quận 1. Với cửa sổ từ sàn đến trần, nội thất cao cấp và tầm nhìn ngoạn mục ra đường chân trời thành phố và Sông Sài Gòn.",
    price: 2800000,
    location: "District 1, Ho Chi Minh City",
    locationVi: "Quận 1, TP. Hồ Chí Minh",
    area: 380,
    bedrooms: 4,
    bathrooms: 5,
    type: "Penthouse",
    typeVi: "Căn hộ Penthouse",
    status: "For Sale",
    statusVi: "Đang Bán",
    yearBuilt: 2022,
    images: [
      "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://raw.githubusercontent.com/rachidchfira/vreal-estate-hub/main/Screenshot%202025-03-19%20at%2011.26.57.png",
      "https://raw.githubusercontent.com/rachidchfira/vreal-estate-hub/main/Screenshot%202025-03-19%20at%2011.26.57.png",
      "https://raw.githubusercontent.com/rachidchfira/vreal-estate-hub/main/Screenshot%202025-03-19%20at%2011.26.57.png",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-a8cfb230cfb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "Private Rooftop Pool",
      "Smart Home Technology",
      "Fully Furnished",
      "Private Elevator",
      "24/7 Security",
      "Fitness Center",
      "Concierge Service"
    ],
    featuresVi: [
      "Hồ Bơi Riêng Trên Sân Thượng",
      "Công Nghệ Nhà Thông Minh",
      "Nội Thất Đầy Đủ",
      "Thang Máy Riêng",
      "An Ninh 24/7",
      "Trung Tâm Thể Dục",
      "Dịch Vụ Tiếp Tân"
    ],
    isFeatured: true
  },
  {
    id: "prop-002",
    title: "Elegant Villa in Thao Dien",
    titleVi: "Biệt Thự Thanh Lịch Tại Thảo Điền",
    description: "Nestled in the prestigious Thao Dien area, this exquisite villa offers the perfect blend of modern architecture and natural beauty. The property features a lush garden, private pool, and spacious living areas.",
    descriptionVi: "Nằm trong khu vực danh giá Thảo Điền, biệt thự tinh tế này mang đến sự kết hợp hoàn hảo giữa kiến trúc hiện đại và vẻ đẹp tự nhiên. Bất động sản có vườn xanh tươi, hồ bơi riêng và không gian sống rộng rãi.",
    price: 4200000,
    location: "Thao Dien, District 2, Ho Chi Minh City",
    locationVi: "Thảo Điền, Quận 2, TP. Hồ Chí Minh",
    area: 620,
    bedrooms: 6,
    bathrooms: 7,
    type: "Villa",
    typeVi: "Biệt Thự",
    status: "For Sale",
    statusVi: "Đang Bán",
    yearBuilt: 2023,
    images: [
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Private Garden",
      "Swimming Pool",
      "Home Theater",
      "Wine Cellar",
      "Outdoor Kitchen",
      "Smart Home System",
      "Double Garage"
    ],
    featuresVi: [
      "Vườn Riêng",
      "Hồ Bơi",
      "Rạp Chiếu Phim Tại Nhà",
      "Hầm Rượu",
      "Nhà Bếp Ngoài Trời",
      "Hệ Thống Nhà Thông Minh",
      "Garage Đôi"
    ],
    isFeatured: true
  },
  {
    id: "prop-003",
    title: "Luxury Apartment in Landmark 81",
    titleVi: "Căn Hộ Cao Cấp Tại Landmark 81",
    description: "This high-end apartment offers breathtaking views from Vietnam's tallest building. Enjoy premium amenities, designer interiors, and unparalleled city views from every room.",
    descriptionVi: "Căn hộ cao cấp này mang đến tầm nhìn tuyệt đẹp từ tòa nhà cao nhất Việt Nam. Tận hưởng các tiện nghi hàng đầu, nội thất thiết kế tinh tế và tầm nhìn thành phố vô song từ mọi phòng.",
    price: 10,
    location: "Landmark 81, Binh Thanh District, Ho Chi Minh City",
    locationVi: "Landmark 81, Quận Bình Thạnh, TP. Hồ Chí Minh",
    area: 145,
    bedrooms: 3,
    bathrooms: 2,
    type: "Apartment",
    typeVi: "Căn Hộ",
    status: "For Sale",
    statusVi: "Đang Bán",
    yearBuilt: 2020,
    images: [
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Panoramic City Views",
      "Designer Interiors",
      "Private Sky Lounge",
      "Fitness Center",
      "24/7 Concierge",
      "Smart Home Features",
      "Valet Parking"
    ],
    featuresVi: [
      "Tầm Nhìn Toàn Cảnh Thành Phố",
      "Nội Thất Thiết Kế",
      "Khu Lounge Riêng Trên Cao",
      "Trung Tâm Thể Dục",
      "Lễ Tân 24/7",
      "Tính Năng Nhà Thông Minh",
      "Dịch Vụ Đỗ Xe"
    ],
    isFeatured: true
  },
  {
    id: "prop-004",
    title: "Beachfront Luxury Villa in Da Nang",
    titleVi: "Biệt Thự Sang Trọng Ven Biển Tại Đà Nẵng",
    description: "Located on the pristine beachfront of Da Nang, this magnificent villa offers direct beach access, infinity pool overlooking the ocean, and modern luxury amenities throughout.",
    descriptionVi: "Nằm trên bãi biển nguyên sơ của Đà Nẵng, biệt thự tráng lệ này cung cấp lối đi trực tiếp ra bãi biển, hồ bơi vô cực nhìn ra đại dương và các tiện nghi sang trọng hiện đại.",
    price: 5200000,
    location: "My Khe Beach, Da Nang",
    locationVi: "Bãi biển Mỹ Khê, Đà Nẵng",
    area: 850,
    bedrooms: 7,
    bathrooms: 8,
    type: "Beachfront Villa",
    typeVi: "Biệt Thự Ven Biển",
    status: "For Sale",
    statusVi: "Đang Bán",
    yearBuilt: 2023,
    images: [
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Direct Beach Access",
      "Infinity Pool",
      "Private Yacht Dock",
      "Home Automation",
      "Spa and Wellness Center",
      "Outdoor Entertainment Area",
      "Staff Quarters"
    ],
    featuresVi: [
      "Lối Ra Biển Trực Tiếp",
      "Hồ Bơi Vô Cực",
      "Bến Du Thuyền Riêng",
      "Tự Động Hóa Nhà",
      "Trung Tâm Spa và Sức Khỏe",
      "Khu Vực Giải Trí Ngoài Trời",
      "Khu Nhà Nhân Viên"
    ],
    isFeatured: true
  },
  {
    id: "prop-005",
    title: "Historic French Colonial Mansion in Hanoi",
    titleVi: "Biệt Thự Kiến Trúc Pháp Cổ Tại Hà Nội",
    description: "This meticulously restored French colonial mansion in Hanoi's historic district combines period charm with modern comforts. Features include original architectural details, landscaped gardens, and contemporary amenities.",
    descriptionVi: "Biệt thự kiến trúc Pháp được phục hồi tỉ mỉ này trong khu phố cổ Hà Nội kết hợp nét quyến rũ thời kỳ với tiện nghi hiện đại. Đặc điểm bao gồm các chi tiết kiến trúc nguyên bản, vườn cảnh quan và tiện nghi đương đại.",
    price: 2100000,
    location: "Ba Dinh District, Hanoi",
    locationVi: "Quận Ba Đình, Hà Nội",
    area: 310,
    bedrooms: 5,
    bathrooms: 4,
    type: "Historic Mansion",
    typeVi: "Biệt Thự Lịch Sử",
    status: "For Sale",
    statusVi: "Đang Bán",
    yearBuilt: 1925,
    images: [
      "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Original Architectural Details",
      "Landscaped Gardens",
      "Wine Cellar",
      "Library",
      "Chef's Kitchen",
      "Conservatory",
      "Period Furnishings"
    ],
    featuresVi: [
      "Chi Tiết Kiến Trúc Nguyên Bản",
      "Vườn Được Thiết Kế Cảnh Quan",
      "Hầm Rượu",
      "Thư Viện",
      "Nhà Bếp Chuyên Nghiệp",
      "Phòng Kính",
      "Nội Thất Thời Kỳ"
    ],
    isFeatured: false
  },
  {
    id: "prop-006",
    title: "Luxury Mountain Resort in Sapa",
    titleVi: "Khu Nghỉ Dưỡng Sang Trọng Trên Núi Tại Sapa",
    description: "This exclusive mountain resort offers panoramic views of Fansipan and the surrounding rice terraces. Built with sustainable materials and designed to merge seamlessly with the natural environment.",
    descriptionVi: "Khu nghỉ dưỡng độc quyền trên núi này cung cấp tầm nhìn toàn cảnh về Fansipan và ruộng bậc thang xung quanh. Được xây dựng bằng vật liệu bền vững và thiết kế để hòa hợp liền mạch với môi trường tự nhiên.",
    price: 1800000,
    location: "Sapa, Lao Cai Province",
    locationVi: "Sapa, Tỉnh Lào Cai",
    area: 420,
    bedrooms: 5,
    bathrooms: 4,
    type: "Mountain Resort",
    typeVi: "Khu Nghỉ Dưỡng Núi",
    status: "For Sale",
    statusVi: "Đang Bán",
    yearBuilt: 2022,
    images: [
      "https://images.unsplash.com/photo-1546593064-053d21199be1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Panoramic Mountain Views",
      "Sustainable Architecture",
      "Infinity Hot Springs",
      "Meditation Pavilion",
      "Organic Garden",
      "Hiking Trails",
      "Helipad"
    ],
    featuresVi: [
      "Tầm Nhìn Núi Toàn Cảnh",
      "Kiến Trúc Bền Vững",
      "Suối Nước Nóng Vô Cực",
      "Khu Thiền",
      "Vườn Hữu Cơ",
      "Đường Mòn Đi Bộ",
      "Bãi Đáp Trực Thăng"
    ],
    isFeatured: false
  }
];
