data = [
	{
		"Model": "Model Name",
		"RAM": "4",
        "brand": "Lenovo",
		"price": "200",
        "ROM": "128",
		"image": "http://www.sweetwater.com/images/items/120/LPST5HTHDCH-medium.jpg?9782bd"
	},
    {
		"Model": "Model Name",
		"RAM": "4",
        "price": "200",
        "brand": "Lenovo",
		"ROM": "128",
		"image": "http://www.sweetwater.com/images/items/120/LPST5HTHDCH-medium.jpg?9782bd"
	},
    {
		"Model": "Model Name",
		"RAM": "4",
        "brand": "Lenovo",
		"price": "200",
        "ROM": "128",
		"image": "http://www.sweetwater.com/images/items/120/LPST5HTHDCH-medium.jpg?9782bd"
	},
    {
		"Model": "Model Name",
		"RAM": "4",
        "brand": "Lenovo",
		"price": "200",
        "ROM": "128",
		"image": "http://www.sweetwater.com/images/items/120/LPST5HTHDCH-medium.jpg?9782bd"
	},
    {
		"Model": "Model Name",
		"RAM": "4",
        "brand": "Lenovo",
		"price": "200",
        "ROM": "128",
		"image": "http://www.sweetwater.com/images/items/120/LPST5HTHDCH-medium.jpg?9782bd"
	},
    {
		"Model": "Model Name",
		"RAM": "6",
        "brand": "Lenovo",
		"ROM": "128",
        "price": "200",
		"image": "http://www.sweetwater.com/images/items/120/LPST5HTHDCH-medium.jpg?9782bd"
	}
];

var products = "",
	RAMs = "",
	ROMs = "",
    brands = "";

for (var i = 0; i < data.length; i++) {
	var RAM = data[i].RAM,
		ROM = data[i].ROM,
		price = data[i].price,
        brand = data[i].brand,
		//rawPrice = price.replace("$",""),
		//rawPrice = parseInt(rawPrice.replace(",","")),
		image = data[i].image;
	//create product cards
//	products += "<div class='col-sm-4 product' data-RAM='" + RAM + "' data-ROM='" + ROM + "'><div class='product-inner text-center'><img src='" + image + "'><br />RAM: " + RAM + "<br />ROM: " + ROM + "<br />Price: " + price + "</div></div>";
	products += '<div class="col-lg-4 col-md-6 col-sm-12 pb-5 single-product" data-RAM="'+ RAM +'" data-ROM="'+ ROM +'">';
    products +=     '<div class="product-container">';
    products +=         '<div class="product-card">';
    products +=             '<div class="imgBx">';
    products +=                 '<img src="assets/img/img.png">';
    products +=             '</div>';
    products +=             '<div class="contentBx">';
    products +=                 '<h2>Nike Shoes</h2>';
    products +=                 '<div class="size">';
    products +=                     '<h3>RAM :</h3><span>' + RAM + '</span>';
    products +=                 '</div>';
    products +=                 '<div class="size">';
    products +=                     '<h3>ROM :</h3><span>' + ROM + '</span>';
    products +=                 '</div>';
    products +=                 '<a href="#">Buy Now</a>';
    products +=             '</div>';
    products +=         '</div>';
    products +=     '</div>';
    products += '</div>';

    //create dropdown of makes
	if (RAMs.indexOf("<option value='" + RAM + "'>" + RAM + "</option>") == -1) {
		RAMs += "<option value='" + RAM + "'>" + RAM + "</option>";
	}
	//create dropdown of models
	// if (models.indexOf("<option value='" + model+"'>" + model + "</option>") == -1) {
	// 	models += "<option value='" + model + "'>" + model + "</option>";
	// }
	
	//create dropdown of ROMs
    
	if (ROMs.indexOf("<option value='" + ROM + "'>" + ROM + "</option>") == -1) {
		ROMs += "<option value='" + ROM + "'>" + ROM + "</option>";
	}
    if (brands.indexOf("<option value='" + brand + "'>" + brand + "</option>") == -1) {
		brands += "<option value='" + brand + "'>" + brand + "</option>";
	}
}

$("#products").html(products);
$(".filter-Brand").append(brands);
$(".filter-RAM").append(RAMs);
$(".filter-price").append(price);
$(".filter-ROM").append(ROMs);

var filtersObject = {};

//on filter change
$(".filter").on("change",function() {
	var filterName = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = [];
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters.push("data-"+key+"='"+filtersObject[key]+"'");
	 	}
	}
    console.log(filters);
	if (filters == "") {
		$(".products").show();
	} else {
        
        var single_product = $('#products').children('div');
        
        for (var i = 0; i < single_product.length ; i++) {
//            console.log(single_product[i].toString().indexOf("RAM='6'") >= 0);
            // if(single_product[i].indexOf(filters) >= 0)
            // {
            //     console.log(single_product[i]);
            // }
            // console.log(single_product[i]);
        }
        // single_product.forEach(element => {
        //     if(element.html().toString().indexOf("") >= 0)
        //     {
        //         console.log(element.html());
        //     }
        // });
		$(".products").hide();
		$(".products").hide().filter(filters).show();
	}
});

//on search form submit
$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".products").hide();
	$(".products").each(function() {
		var RAM = $(this).data("RAM").toLowerCase(),
			brand = $(this).data("brand").toLowerCase(),
			ROM = $(this).data("ROM").toLowerCase();

		if (RAM.indexOf(query) > -1 || brand.indexOf(query) > -1 || ROM.indexOf(query) > -1) {
			$(this).show();
		}
	});
});