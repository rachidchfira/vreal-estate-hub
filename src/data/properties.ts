
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
    title: "Luxury Penthouse with Panoramic Views",
    titleVi: "Căn hộ Penthouse Sang Trọng với Tầm Nhìn Toàn Cảnh",
    description: "Experience unparalleled luxury in this stunning penthouse located in the heart of District 1. Featuring floor-to-ceiling windows, high-end finishes, and breathtaking views of the city skyline and Saigon River.",
    descriptionVi: "Trải nghiệm sự sang trọng không gì sánh bằng trong căn penthouse tuyệt đẹp này nằm ở trung tâm Quận 1. Với cửa sổ từ sàn đến trần, nội thất cao cấp và tầm nhìn ngoạn mục ra đường chân trời thành phố và Sông Sài Gòn.",
    price: 2500000,
    location: "District 1, Ho Chi Minh City",
    locationVi: "Quận 1, TP. Hồ Chí Minh",
    area: 350,
    bedrooms: 4,
    bathrooms: 5,
    type: "Penthouse",
    typeVi: "Căn hộ Penthouse",
    status: "For Sale",
    statusVi: "Đang Bán",
    yearBuilt: 2022,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-a8cfb230cfb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
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
    price: 3800000,
    location: "Thao Dien, District 2, Ho Chi Minh City",
    locationVi: "Thảo Điền, Quận 2, TP. Hồ Chí Minh",
    area: 550,
    bedrooms: 5,
    bathrooms: 6,
    type: "Villa",
    typeVi: "Biệt Thự",
    status: "For Sale",
    statusVi: "Đang Bán",
    yearBuilt: 2021,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
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
    title: "Modern Apartment in Vinhomes Central Park",
    titleVi: "Căn Hộ Hiện Đại Trong Vinhomes Central Park",
    description: "This stylish apartment offers contemporary living in the prestigious Vinhomes Central Park. Enjoy panoramic views of the park and Saigon River from your private balcony.",
    descriptionVi: "Căn hộ phong cách này mang đến cuộc sống hiện đại trong khu Vinhomes Central Park danh giá. Tận hưởng tầm nhìn toàn cảnh công viên và Sông Sài Gòn từ ban công riêng của bạn.",
    price: 950000,
    location: "Vinhomes Central Park, Binh Thanh District, Ho Chi Minh City",
    locationVi: "Vinhomes Central Park, Quận Bình Thạnh, TP. Hồ Chí Minh",
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
    type: "Apartment",
    typeVi: "Căn Hộ",
    status: "For Sale",
    statusVi: "Đang Bán",
    yearBuilt: 2020,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Balcony with City View",
      "Fully Furnished",
      "Building Swimming Pool",
      "Fitness Center",
      "24/7 Security",
      "Parking Space",
      "Children's Playground"
    ],
    featuresVi: [
      "Ban Công Với Tầm Nhìn Thành Phố",
      "Nội Thất Đầy Đủ",
      "Hồ Bơi Trong Tòa Nhà",
      "Trung Tâm Thể Dục",
      "An Ninh 24/7",
      "Chỗ Đậu Xe",
      "Sân Chơi Trẻ Em"
    ],
    isFeatured: true
  },
  {
    id: "prop-004",
    title: "Waterfront Mansion in Da Nang",
    titleVi: "Biệt Thự Ven Biển Tại Đà Nẵng",
    description: "Located on the pristine beachfront of Da Nang, this magnificent mansion offers luxury living with breathtaking ocean views. The property includes a private beach access and infinity pool.",
    descriptionVi: "Nằm trên bãi biển nguyên sơ của Đà Nẵng, biệt thự tráng lệ này mang đến cuộc sống sang trọng với tầm nhìn tuyệt đẹp ra đại dương. Bất động sản bao gồm lối đi xuống bãi biển riêng và hồ bơi vô cực.",
    price: 4500000,
    location: "My Khe Beach, Da Nang",
    locationVi: "Bãi biển Mỹ Khê, Đà Nẵng",
    area: 800,
    bedrooms: 6,
    bathrooms: 7,
    type: "Mansion",
    typeVi: "Biệt Thự Lớn",
    status: "For Sale",
    statusVi: "Đang Bán",
    yearBuilt: 2023,
    images: [
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Private Beach Access",
      "Infinity Pool",
      "Helicopter Pad",
      "Home Automation",
      "Spa and Sauna",
      "Guest House",
      "Tropical Garden"
    ],
    featuresVi: [
      "Lối Xuống Biển Riêng",
      "Hồ Bơi Vô Cực",
      "Bãi Đáp Trực Thăng",
      "Tự Động Hóa Nhà",
      "Spa và Phòng Xông Hơi",
      "Nhà Khách",
      "Vườn Nhiệt Đới"
    ],
    isFeatured: true
  },
  {
    id: "prop-005",
    title: "Colonial-Style Residence in Hanoi",
    titleVi: "Nhà Ở Phong Cách Thuộc Địa Tại Hà Nội",
    description: "This elegant colonial-style residence in Hanoi's Old Quarter combines historic charm with modern amenities. The property has been meticulously restored to preserve its architectural heritage.",
    descriptionVi: "Nhà ở thanh lịch theo phong cách thuộc địa này ở Phố Cổ Hà Nội kết hợp nét quyến rũ lịch sử với tiện nghi hiện đại. Bất động sản đã được phục hồi tỉ mỉ để bảo tồn di sản kiến trúc của nó.",
    price: 1800000,
    location: "Hoan Kiem District, Hanoi",
    locationVi: "Quận Hoàn Kiếm, Hà Nội",
    area: 280,
    bedrooms: 4,
    bathrooms: 3,
    type: "House",
    typeVi: "Nhà",
    status: "For Sale",
    statusVi: "Đang Bán",
    yearBuilt: 1930,
    images: [
      "https://images.unsplash.com/photo-1508330570239-ce7cabceee22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Original Hardwood Floors",
      "Courtyard Garden",
      "Contemporary Kitchen",
      "Library",
      "Roof Terrace",
      "Wine Cellar",
      "Antique Furnishings"
    ],
    featuresVi: [
      "Sàn Gỗ Cứng Nguyên Bản",
      "Vườn Sân Trong",
      "Nhà Bếp Hiện Đại",
      "Thư Viện",
      "Sân Thượng",
      "Hầm Rượu",
      "Đồ Nội Thất Cổ"
    ],
    isFeatured: false
  },
  {
    id: "prop-006",
    title: "Mountain Retreat in Sapa",
    titleVi: "Khu Nghỉ Dưỡng Trên Núi Tại Sapa",
    description: "Escape to this stunning mountain retreat in Sapa, offering panoramic views of rice terraces and Fansipan Mountain. The property combines traditional Hmong architecture with modern comforts.",
    descriptionVi: "Trốn đến khu nghỉ dưỡng tuyệt đẹp trên núi này ở Sapa, mang đến tầm nhìn toàn cảnh ruộng bậc thang và núi Fansipan. Bất động sản kết hợp kiến trúc truyền thống của người Hmong với tiện nghi hiện đại.",
    price: 1200000,
    location: "Sapa, Lao Cai Province",
    locationVi: "Sapa, Tỉnh Lào Cai",
    area: 300,
    bedrooms: 4,
    bathrooms: 3,
    type: "Villa",
    typeVi: "Biệt Thự",
    status: "For Sale",
    statusVi: "Đang Bán",
    yearBuilt: 2021,
    images: [
      "https://images.unsplash.com/photo-1546593064-053d21199be1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Panoramic Mountain Views",
      "Stone Fireplace",
      "Heated Floors",
      "Observation Deck",
      "Organic Garden",
      "Yoga Studio",
      "Hiking Trails"
    ],
    featuresVi: [
      "Tầm Nhìn Núi Toàn Cảnh",
      "Lò Sưởi Đá",
      "Sàn Sưởi",
      "Sân Quan Sát",
      "Vườn Hữu Cơ",
      "Phòng Tập Yoga",
      "Đường Mòn Đi Bộ"
    ],
    isFeatured: false
  }
];
