import { IProduct } from "./pages/product-view-page";

const productCategories = [
    {
        id: '1',
        title: 'Phones & Tablets',
        catImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/phonescatimage.png',
    },
    {
        id: '2',
        title: 'Electronics',
        catImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/electronics.png',
    },
    {
        id: '3',
        title: 'Gaming and Computer',
        catImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/gaming.png',
    },
    {
        id: '4',
        title: 'Trucks and Automobile',
        catImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/trucks.png',
    },
    {
        id: '5',
        title: 'Health & Beauty',
        catImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/healthandbeauty.png',
    },
    {
        id: '6',
        title: 'Home Appliances',
        catImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/aplliances.png',
    },
    {
        id: '7',
        title: 'Office & Furniture',
        catImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/tvandaudio.png',
    }
]

const products: IProduct[] = [
    {
        id: 'VS0N01',
        catId: '',
        title: 'Apple IPhone 16 Pro Max - 256GB - Black Titanium',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone16promax.png',
        prodDescription: '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
        price: '1600',
        section: 'hotdeals'

    },
    {
        id: 'VS0N02',
        catId: '',
        title: 'Apple IPhone 13 Pro Max 6.7"- Gold',
        prodDescription: '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone13promax.png',
        price: '800',
        section: 'hotdeals'

    },
    {
        id: 'VS0N03',
        catId: '',
        title: 'Apple MacBook Air 13.3" 8GB RAM/256GB M1 Processor - Space Grey',
        prodDescription: 'MacBook Air Power. It’s in the Air.thinnest, lightest notebook, completely transformed by the M1. With CPU speeds up to 3.5x faster and GPU speeds up to 5x faster.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/macbookair.png',
        price: '750',
        section: 'hotdeals'

    },
    {
        id: 'VS0N04',
        catId: '',
        title: 'Sony Computer Entertainment Play Station 5 Slim',
        prodDescription: 'Model: Sony PlayStation5 Slim new Edition PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2023 as the successor to the PlayStation 5, the PS5 was released on November 12, 2023 in North America.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/ps5.png',
        price: '1230',
        section: 'hotdeals'

    },
    {
        id: 'VS0N05',
        catId: '',
        title: 'Samsung Galaxy S24 Ultra Dual SIM - 12GB RAM - 256GB - 5G - Black',
        prodDescription: 'Bring details out of the darkness Regardless of darkness or distance, capture clear content with Nightography and high resolution zoom on Galaxy S24 Ultra. Break down barriers to language barriers',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/samsungs24ultra.png',
        price: '1250',
        section: 'hotdeals'
    },
    {
        id: 'VS0N06',
        catId: '',
        title: '2012 Ford F-550 XL Super Duty',
        prodDescription: '2012 Ford F-550 XL Super Duty 12 Flatbed Pickup Truck 6.7L A/T bidadoo -Repair',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/truckBus.png',
        price: '4600',
        section: 'hotdeals'

    },
    {
        id: 'VS0N07',
        catId: '',
        title: 'Apple Watch Ultra 2 49mm Gps + Cellular - Band 64GB - Excellent',
        prodDescription: '4G Data Capable, Accelerometer, Barometer, Biological Data Sensor, Blood Oxygen Sensor, Blood Pressure Monitor, Bluetooth Enabled, GPS, Heart Rate Monitor, Touchscreen, Wi-Fi Capable, Water-Resistant, Waterproof',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/applewatchultra.png',
        price: '1600',
        section: 'hotdeals'

    },
    {
        id: 'VS0N08',
        catId: '',
        title: 'Patek Philippe Nautilus Men Black Watch - 3800',
        prodImageUrl: `https://verifiedsell.s3.eu-north-1.amazonaws.com/verifiedsell-assets/product-pictures/Patek+Philippe+Nautilus+Men's+Black+Watch+-+3800.png`,
        prodDescription: '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
        price: '1600',
        section: 'fashion'

    },
    {
        id: 'VS0N09',
        catId: '',
        title: 'Authentic♕Rolex♕Watch Datejust 41mm White Dial.',
        prodDescription: '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
        prodImageUrl: `https://verifiedsell.s3.eu-north-1.amazonaws.com/verifiedsell-assets/product-pictures/Authentic%E2%99%95Rolex%E2%99%95Watch+Datejust+41mm+White+Dial+Oyster+Steel+Bracelet+Smooth+Role.png`,
        price: '800',
        section: 'fashion'

    },
    {
        id: 'VS0N10',
        catId: '',
        title: 'CHANEL Matelasse W flap chain Shoulder Bag.',
        prodDescription: 'MacBook Air Power. It’s in the Air.thinnest, lightest notebook, completely transformed by the M1. With CPU speeds up to 3.5x faster and GPU speeds up to 5x faster.',
        prodImageUrl: `https://verifiedsell.s3.eu-north-1.amazonaws.com/verifiedsell-assets/product-pictures/CHANEL+Matelasse+W+flap+chain+Shoulder+Bag+A01113+Lambskin+Beige+Used+GHW.png`,
        price: '750',
        section: 'fashion'

    },
    {
        id: 'VS0N011',
        catId: '',
        title: 'CHANEL Cambon Line Large Tote shoulder Bag A25169.',
        prodDescription: 'Model: Sony PlayStation5 Slim new Edition PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2023 as the successor to the PlayStation 5, the PS5 was released on November 12, 2023 in North America.',
        prodImageUrl: `https://verifiedsell.s3.eu-north-1.amazonaws.com/verifiedsell-assets/product-pictures/CHANEL+Cambon+Line+Large+Tote+shoulder+Bag+A25169+leather+Black+White+Used+SHW.png`,
        price: '123',
        section: 'fashion'

    },
    {
        id: 'VS0N012',
        catId: '',
        title: 'Jordan Jumpman Jack TR Travis Scott University.',
        prodDescription: 'Bring details out of the darkness Regardless of darkness or distance, capture clear content with Nightography and high resolution zoom on Galaxy S24 Ultra. Break down barriers to language barriers',
        prodImageUrl: `https://verifiedsell.s3.eu-north-1.amazonaws.com/verifiedsell-assets/product-pictures/Jordan+Jumpman+Jack+TR+Travis+Scott+University+Red+FZ8117-101+Men's.png`,
        price: '350',
        section: 'fashion'

    },
    {
        id: 'VS0N013',
        catId: '',
        title: 'NIKE Men 9.5US Sneakers Air Jordan 1 Retro.',
        prodDescription: 'Travis Scott Jordan 1 low, medium olive promo shoe everything is the same as a general pair, but the sticker on the box, the tag inside the shoe, and the SKU numbers are different than a GR.',
        prodImageUrl: `https://verifiedsell.s3.eu-north-1.amazonaws.com/verifiedsell-assets/product-pictures/Nike+Travis+Scott+Air+Jordan+1+Low+OG+SP+EU+49.5+US+15+Medium+Olive+Reverse+NEW.png`,
        price: '730',
        section: 'fashion'
    },
    {
        id: 'VS0N07',
        catId: '',
        title: 'Nike Travis Scott Air Jordan 1 Low OG SP EU 49.5',
        prodDescription: 'Nike Travis Scott Air Jordan 1 Low OG SP EU 49.5 US 15 Medium Olive Reverse NEW',
        prodImageUrl: `https://verifiedsell.s3.eu-north-1.amazonaws.com/verifiedsell-assets/product-pictures/Travis+Scott+Jordan+1+Low+Medium+Olive.png`,
        price: '840',
        section: 'fashion'

    },
    {
        id: 'VS0N01',
        catId: '',
        title: 'Sony ZV-1 20.1Megapixel Digital Camera.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone16promax.png',
        prodDescription: '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
        price: '310',
        section: 'content'

    },
    {
        id: 'VS0N02',
        catId: '',
        title: 'Sony ZV 1F Vlog Camera Black.',
        prodDescription: '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone13promax.png',
        price: '290',
        section: 'content'

    },
    {
        id: 'VS0N03',
        catId: '',
        title: 'Sony ZV 1 Vlog Camera for Content Creators and Vloggers Black With Small Rig.',
        prodDescription: 'MacBook Air Power. It’s in the Air.thinnest, lightest notebook, completely transformed by the M1. With CPU speeds up to 3.5x faster and GPU speeds up to 5x faster.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/macbookair.png',
        price: '390',
        section: 'content'

    },
    {
        id: 'VS0N04',
        catId: '',
        title: 'BRAND NEW! Canon EOS R50 Content Creator Kit # 5811C059.',
        prodDescription: 'Model: Sony PlayStation5 Slim new Edition PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2023 as the successor to the PlayStation 5, the PS5 was released on November 12, 2023 in North America.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/ps5.png',
        price: '123',
        section: 'content'

    },
    {
        id: 'VS0N05',
        catId: '',
        title: 'Frameworks All-In-One Content Creator Tree with Light, Mic & Camera Attachments.',
        prodDescription: 'Bring details out of the darkness Regardless of darkness or distance, capture clear content with Nightography and high resolution zoom on Galaxy S24 Ultra. Break down barriers to language barriers',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/samsungs24ultra.png',
        price: '220',
        section: 'content'

    },
    {
        id: 'VS0N06',
        catId: '',
        title: 'Canon EOS M200 Mirrorless Digital Vlogging Content Creator Kit [Black].',
        prodDescription: '2012 Ford F-550 XL Super Duty 12 Flatbed Pickup Truck 6.7L A/T bidadoo -Repair',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/truckBus.png',
        price: '453',
        section: 'content'

    },
    {
        id: 'VS0N07',
        catId: '',
        title: 'YONGNUO YN300IV Full-Color RGB LED Fill Light 3200K-5600K For Photography Studio',
        prodDescription: '4G Data Capable, Accelerometer, Barometer, Biological Data Sensor, Blood Oxygen Sensor, Blood Pressure Monitor, Bluetooth Enabled, GPS, Heart Rate Monitor, Touchscreen, Wi-Fi Capable, Water-Resistant, Waterproof',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/applewatchultra.png',
        price: '89',
        section: 'content'

    },
    {
        id: 'VS0N05',
        catId: '',
        title: 'SciFit Sci Fit Step one Recumbent Stepper.',
        prodDescription: 'Bring details out of the darkness Regardless of darkness or distance, capture clear content with Nightography and high resolution zoom on Galaxy S24 Ultra. Break down barriers to language barriers',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/samsungs24ultra.png',
        price: '1750',
        section: 'fitness'

    },
    {
        id: 'VS0N06',
        catId: '',
        title: 'VINTAGE*NAUTILUS*WEIGHT MACHINE~DOUBLE, DUO~*DECLINE CHEST',
        prodDescription: '2012 Ford F-550 XL Super Duty 12 Flatbed Pickup Truck 6.7L A/T bidadoo -Repair',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/truckBus.png',
        price: '2450',
        section: 'fitness'

    },
    {
        id: 'VS0N07',
        catId: '',
        title: 'Body-Solid Compact Leg Press Plate Loaded Commercial GCLP100',
        prodDescription: '4G Data Capable, Accelerometer, Barometer, Biological Data Sensor, Blood Oxygen Sensor, Blood Pressure Monitor, Bluetooth Enabled, GPS, Heart Rate Monitor, Touchscreen, Wi-Fi Capable, Water-Resistant, Waterproof',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/applewatchultra.png',
        price: '740',
        section: 'fitness'

    },
    {
        id: 'VS0N01',
        catId: '',
        title: 'BODY BY JAKE TOTAL BODY TRAINER EXERCISE MACHINE NEW IN BOX.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone16promax.png',
        prodDescription: '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
        price: '270',
        section: 'fitness'

    },
    {
        id: 'VS0N02',
        catId: '',
        title: 'Lateral Raise Attachment Standing Lateral Raise Machine Shoulder Press Machines.',
        prodDescription: '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone13promax.png',
        price: '420',
        section: 'fitness'

    },
    {
        id: 'VS0N03',
        catId: '',
        title: 'Marcy 150 lb. Stack Weight Home Gym MWM-4965SC Full Tricep Lat Butterfly Curl',
        prodDescription: 'MacBook Air Power. It’s in the Air.thinnest, lightest notebook, completely transformed by the M1. With CPU speeds up to 3.5x faster and GPU speeds up to 5x faster.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/macbookair.png',
        price: '534',
        section: 'fitness'

    },
    {
        id: 'VS0N04',
        catId: '',
        title: 'BRAND NEW! Canon EOS R50 Content Creator Kit # 5811C059.',
        prodDescription: 'Model: Sony PlayStation5 Slim new Edition PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2023 as the successor to the PlayStation 5, the PS5 was released on November 12, 2023 in North America.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/ps5.png',
        price: '123',
        section: 'fitness'

    },
    {
        id: 'VS0N05',
        catId: '',
        title: 'SciFit Sci Fit Step one Recumbent Stepper.',
        prodDescription: 'Bring details out of the darkness Regardless of darkness or distance, capture clear content with Nightography and high resolution zoom on Galaxy S24 Ultra. Break down barriers to language barriers',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/samsungs24ultra.png',
        price: '1750',
        section: 'electronics'

    },
    {
        id: 'VS0N06',
        catId: '',
        title: 'VINTAGE*NAUTILUS*WEIGHT MACHINE~DOUBLE, DUO~*DECLINE CHEST',
        prodDescription: '2012 Ford F-550 XL Super Duty 12 Flatbed Pickup Truck 6.7L A/T bidadoo -Repair',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/truckBus.png',
        price: '2450',
        section: 'electronics'

    },
    {
        id: 'VS0N07',
        catId: '',
        title: 'Body-Solid Compact Leg Press Plate Loaded Commercial GCLP100',
        prodDescription: '4G Data Capable, Accelerometer, Barometer, Biological Data Sensor, Blood Oxygen Sensor, Blood Pressure Monitor, Bluetooth Enabled, GPS, Heart Rate Monitor, Touchscreen, Wi-Fi Capable, Water-Resistant, Waterproof',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/applewatchultra.png',
        price: '740',
        section: 'electronics'

    },
    {
        id: 'VS0N01',
        catId: '',
        title: 'BODY BY JAKE TOTAL BODY TRAINER EXERCISE MACHINE NEW IN BOX.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone16promax.png',
        prodDescription: '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
        price: '270',
        section: 'electronics'

    },
    {
        id: 'VS0N02',
        catId: '',
        title: 'Lateral Raise Attachment Standing Lateral Raise Machine Shoulder Press Machines.',
        prodDescription: '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone13promax.png',
        price: '420',
        section: 'electronics'

    },
    {
        id: 'VS0N03',
        catId: '',
        title: 'Marcy 150 lb. Stack Weight Home Gym MWM-4965SC Full Tricep Lat Butterfly Curl',
        prodDescription: 'MacBook Air Power. It’s in the Air.thinnest, lightest notebook, completely transformed by the M1. With CPU speeds up to 3.5x faster and GPU speeds up to 5x faster.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/macbookair.png',
        price: '534',
        section: 'electronics'

    },
    {
        id: 'VS0N04',
        catId: '',
        title: 'BRAND NEW! Canon EOS R50 Content Creator Kit # 5811C059.',
        prodDescription: 'Model: Sony PlayStation5 Slim new Edition PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2023 as the successor to the PlayStation 5, the PS5 was released on November 12, 2023 in North America.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/ps5.png',
        price: '123',
        section: 'electronics'

    },
    {
        id: 'VS0N05',
        catId: '',
        title: '2017 Ford Transit 150.',
        prodDescription: 'Bring details out of the darkness Regardless of darkness or distance, capture clear content with Nightography and high resolution zoom on Galaxy S24 Ultra. Break down barriers to language barriers',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/samsungs24ultra.png',
        price: '12570',
        section: 'auto'

    },
    {
        id: 'VS0N06',
        catId: '',
        title: '2013 LEXUS IS .',
        prodDescription: '2012 Ford F-550 XL Super Duty 12 Flatbed Pickup Truck 6.7L A/T bidadoo -Repair',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/truckBus.png',
        price: '16500',
        section: 'auto'

    },
    {
        id: 'VS0N07',
        catId: '',
        title: '2018 Land Rover Range Rover Sport V6 Supercharged SE',
        prodDescription: '2018 Land Rover Sport Supercharged Black on Black 45K Miles Clean CarFax 22',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/applewatchultra.png',
        price: '32850',
        section: 'auto'
    },
    {
        id: 'VS0N01',
        catId: '',
        title: '2019 Mercedes-Benz C-Class C 300.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone16promax.png',
        prodDescription: '2019 C 300 Used Turbo 2L I4 16V Automatic RWD Sedan Moonroof',
        price: '22700',
        section: 'auto'

    },
    {
        id: 'VS0N02',
        catId: '',
        title: '2011 Chevrolet Camaro LT.',
        prodDescription: '2011 LT Used 3.6L V6 24V Automatic RWD Convertible OnStar.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone13promax.png',
        price: '27850',
        section: 'auto'

    },
    {
        id: 'VS0N03',
        catId: '',
        title: '2014 GMC Acadia',
        prodDescription: '2014 GMC Acadia 3.6L V6 7 Passenger 4-Door Sport Utility Vehicle SUV A/T bidadoo.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/macbookair.png',
        price: '19735',
        section: 'auto'

    },
    {
        id: 'VS0N04',
        catId: '',
        title: 'BRAND NEW! Canon EOS R50 Content Creator Kit # 5811C059.',
        prodDescription: 'Model: Sony PlayStation5 Slim new Edition PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2023 as the successor to the PlayStation 5, the PS5 was released on November 12, 2023 in North America.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/ps5.png',
        price: '6800',
        section: 'auto'

    },
    {
        id: 'VS0N05',
        catId: '',
        title: 'Ultra Super Concentrated Pherazone for Men',
        prodDescription: 'Start Magnetizing Women With The Ultimate Men’s Pheromone Perfume! Wishing to instantly attract women and get your confidence to unprecedented levels? Do you want to start coming across as a powerful, assertive person and skyrocket your business success? Long years of scientific research and clinical trials have led to the creation of a potent pheromone formula that instantly appeals to women’s sexual receptors, drawing them to you like a magnet!',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/samsungs24ultra.png',
        price: '220',
        section: 'cosmetics'

    },
    {
        id: 'VS0N06',
        catId: '',
        title: 'Vintage Jo Malone London Tudor Rose',
        prodDescription: 'The heraldic Tudor rose, still used today as a royal symbol of England. Blended with opulent rose absolute, clove and ginger, to reinforce the spiced fact. Golden amber wraps the fragrance in warm sensuality. Rich, sumptuous.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/truckBus.png',
        price: '150',
        section: 'cosmetics'

    },
    {
        id: 'VS0N07',
        catId: '',
        title: 'HALSTON NIGHT COLOGNE 2 OZ WOMEN COLOGNE',
        prodDescription: 'We are pleased to inform you that this is coming from our large collection of vintage, original brand names and fragrances. Feel free to buy with confidence! Our products are hard to find and not found in the market anymore; that is what makes our market unique and well known.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/applewatchultra.png',
        price: '32850',
        section: 'cosmetics'

    },
    {
        id: 'VS0N01',
        catId: '',
        title: 'DIOR JOY MOISTURIZING BODY LOTION 200 ML/6.8 FL.OZ.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone16promax.png',
        prodDescription: 'DIOR JOY MOISTURIZING BODY LOTION 200 ML/6.8 FL.OZ..',
        price: '750',
        section: 'cosmetics'

    },
    {
        id: 'VS0N02',
        catId: '',
        title: 'Jo Malone Body Creme Cream 5.9 oz Basil.',
        prodDescription: 'No box.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phonesandtablets/iphone13promax.png',
        price: '325',
        section: 'cosmetics'

    },
    {
        id: 'VS0N03',
        catId: '',
        title: 'Jo Malone Body Creme Cream 5.9 oz Basil.',
        prodDescription: 'Jo Malone Body Creme Cream 5.9 oz Basil & Neroli Body Cream New For Women Unbox.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/macbookair.png',
        price: '325',
        section: 'cosmetics'

    },
    {
        id: 'VS0N04',
        catId: '',
        title: 'La Mer The Body Creme 10.3oz 300ml Cream.',
        prodDescription: 'La Mer The Body Creme 10.3oz 300ml Cream Moisturizing All/Dry Skin New box seal.',
        prodImageUrl: 'https://verifiedsell.s3.eu-north-1.amazonaws.com/product-categories/phones%26tablets/ps5.png',
        price: '275',
        section: 'cosmetics'

    }
]

export const Naira = '$';
const convertToThousand = (value: any) => {
    value = value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0;
    return `${Naira}${value}`;
};

export { productCategories, products, convertToThousand}