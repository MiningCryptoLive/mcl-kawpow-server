// [Data Javascript]
// Project: Cyberpool Frontend - Responsive Pool Template
// Should Be Included In All Pages. It Create Data and Charts

// Pool Links
var mainWeb = "https://raven.miningcrypto.live/";
var WebURL = "https://raven.miningcrypto.live/";
var API = "https://raven.miningcrypto.live/api/";
var stratumAddress = "stratum+tcp://raven.miningcrypto.live";
var welcomeHead = "";
var server = "raven.miningcrypto.live";

// Coin Data
var coinName = "rvn";
var coinAlgo = "Kawpow";
var currentPool = "ravencoin";
var coinTicker = "rvn";
var baseReward = 2500;
var coinWeb = "";
var coinGit = "";
var coinLogoPath = "assets/images/";

// Coingecko
var geckoAPI = "https://api.coingecko.com/api/v3/coins/";
var geckoCOIN = "ravencoin";

// Social Media Links And Other Data
var discord = "https://discord.gg/JpzB46x4Fc";
var telegram = "https://t.me/cool2mine";
var twitter = "https://twitter.com/";
var github = "https://github.com/";
var donation = "RBB95NsPEphnQdT5VrwXtXTA1P44fPrCSJ";
var poolname = "neoxa.miningcrypto.live";

// Store Pool Links
console.log('CyberCore.WebUI  : ', WebURL);		                      // Returns website URL
console.log('API address used : ', API);                                      // Returns API URL
console.log('Stratum address  : ', "stratum+tcp://" + stratumAddress + ":");  // Returns Stratum URL
console.log('Page Load        : ', window.location.href);                     // Returns full URL

// Check browser compatibility
var nua = navigator.userAgent;
var is_IE = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Trident') > -1) && !(nua.indexOf('Chrome') > -1));
if (is_IE) { console.log('Running in IE browser is not supported - ', nua); }

// General Formatter Function
function _formatter(value, decimal, unit) {
	if (value === 0) {
		return "0 " + unit;
	} else {
		var si = [
			{ value: 1, symbol: "" },
			{ value: 1e3, symbol: "K" },
			{ value: 1e6, symbol: "M" },
			{ value: 1e9, symbol: "G" },
			{ value: 1e12, symbol: "T" },
			{ value: 1e15, symbol: "P" },
			{ value: 1e18, symbol: "E" },
			{ value: 1e21, symbol: "Z" },
			{ value: 1e24, symbol: "Y" }
		];
		for (var i = si.length - 1; i > 0; i--) {
			if (value >= si[i].value) {
				break;
			}
		}
		return ((value / si[i].value).toFixed(decimal).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + " " + si[i].symbol + unit);
	}
}

// Time Convert Local -> UTC
function convertLocalDateToUTCDate(date, toUTC) {
	date = new Date(date);
	var localOffset = date.getTimezoneOffset() * 60000;
	var localTime = date.getTime();
	if (toUTC) {
		date = localTime + localOffset;
	} else {
		date = localTime - localOffset;
	}
	newDate = new Date(date);
	return newDate;
}

// Time Convert UTC -> Local
function convertUTCDateToLocalDate(date) {
	var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
	var localOffset = date.getTimezoneOffset() / 60;
	var hours = date.getUTCHours();
	newDate.setHours(hours - localOffset);
	return newDate;
}

// String Convert -> Date
function dateConvertor(date) {
	var options = {
		year: "numeric",
		month: "numeric",
		day: "numeric"
	};
	var newDateFormat = new Date(date).toLocaleDateString("en-US", options);
	var newTimeFormat = new Date(date).toLocaleTimeString();
	var dateAndTime = newDateFormat + ' ' + newTimeFormat
	return dateAndTime
}

// String Convert -> Seconds
function readableSeconds(t) {
	var seconds = Math.round(t);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	if (days === Infinity) days = 0;
	hours = hours - (days * 24);
	if (isNaN(hours)) hours = 0;
	if (hours === Infinity) hours = 0;
	minutes = minutes - (days * 24 * 60) - (hours * 60);
	if (isNaN(minutes)) minutes = 0;
	if (minutes === Infinity) minutes = 0;
	seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
	if (isNaN(seconds)) seconds = 0;
	if (seconds === Infinity) seconds = 0;
	if (days > 0) {
		return (days + "d " + hours + "h " + minutes + "m " + seconds + "s");
	}
	if (hours > 0) {
		return (hours + "h " + minutes + "m " + seconds + "s");
	}
	if (minutes > 0) {
		return (minutes + "m " + seconds + "s");
	}
	return (seconds + "s");
}

// Time Different Calculation
function timeDiff(tstart, tend) {
	var diff = Math.floor((tend - tstart) / 1000), units = [
		{ d: 60, l: "s" },
		{ d: 60, l: "m" },
		{ d: 24, l: "h" },
		{ d: 7, l: "d" }
	];
	var s = '';
	for (var i = 0; i < units.length; ++i) {
		s = (diff % units[i].d) + units[i].l + " " + s;
		diff = Math.floor(diff / units[i].d);
	}
	return s;
}

// Time Different Calculation To Seconds
function timeDiffSec(tstart, tend) {
	var diff = Math.floor((tend - tstart) / 1000), units = [
		{ d: 60, l: " seconds" }
	];
	var s = '';
	for (var i = 0; i < units.length; ++i) {
		s = (diff % units[i].d) + units[i].l + " " + s;
		diff = Math.floor(diff / units[i].d);
	}
	return s;
}

// Scroll To Top Of The Page
function scrollPageTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	var elmnt = document.getElementById("page-scroll-top");
	elmnt.scrollIntoView();
}

// Check If File Exits
function doesFileExist(urlToFile) {
	var xhr = new XMLHttpRequest();
	xhr.open('HEAD', urlToFile, false);
	xhr.send();
	if (xhr.status == "404") {
		return false;
	} else {
		return true;
	}
}

// Load Load General Data Page
function loadGeneralDataContent() {
	setInterval(
		(function load() {
			loadGeneralData();
			return load;
		})(), 3000
	);
}

// Load General Data
function loadGeneralData() {
	return $.ajax(API + "pool_dashboard").done(function (data) {
		var coinLogo = "";
		var geckoLogo = "";
		var poolHeader = "";
		var poolHeader2 = "";
		var discordLink = "";
		var telegramLink = "";
		var twitterLink = "";
		var githubLink = "";
		var coinWebLink = "";
		var coinGitLink = "";
		var footerLink = "";
		var lastblock = data[0].lastblock;
		$.each(data, function (index, value) {
			$("#nameOfCoin").text(coinName);
			$("#nameOfCoinHeader").text((coinName).toUpperCase());
			$("#nameOfCoinHeadline").text((coinName).toUpperCase());
			$("#nameOfCoinHeadline2").text((coinName).toUpperCase());
			$("#algoOfCoin").text(coinAlgo);
			$("#algoOfCoinHeader").text((coinAlgo).toLowerCase());
			$("#tickerOfCoin").text(coinTicker);
			$("#tickerOfCoingecko1").text(coinTicker);
			$("#tickerOfCoingecko2").text(coinTicker);
			$("#donationAddress").text(donation);
			$("#poolName").text(poolname);
			$("#logoOfCoin").text(coinLogoPath + currentPool + ".png");
			coinLogo += "<img src='" + coinLogoPath + currentPool + ".png' class='user-img' alt='coinlogo'>";
			geckoLogo += "<img src='" + coinLogoPath + currentPool + ".png' class='rounded-circle shadow' width='128' height='128' alt='coinlogobig'>";
			poolHeader += "<a href='" + mainWeb + "' target='_blank'><h4 class='d-none d-lg-flex logo-text text-white'>rvn.coolmine.com&nbsp;</h4></a>";
			poolHeader2 += "<a href='" + mainWeb + "' target='_blank'><h4 class='d-none d-lg-flex logo-text text-white'>rvn.coolmine.com&nbsp;</h4></a>";
			discordLink += "<a class='nav-link dropdown-toggle dropdown-toggle-nocaret position-relative' href='" + discord + "' target='_blank'><i class='bx bxl-discord vertical-align-middle'></a></i>";
			telegramLink += "<a class='nav-link dropdown-toggle dropdown-toggle-nocaret position-relative' href='" + telegram + "' target='_blank'><i class='bx bxl-telegram vertical-align-middle'></a>";
			twitterLink += "<a class='nav-link dropdown-toggle dropdown-toggle-nocaret position-relative' href='" + twitter + "' target='_blank'><i class='bx bxl-twitter vertical-align-middle'></a>";
			githubLink += "<a class='nav-link dropdown-toggle dropdown-toggle-nocaret position-relative' href='" + github + "' target='_blank'><i class='bx bxl-github vertical-align-middle'></a>";
			coinWebLink += "<a href='" + coinWeb + "' target='_blank'><i class='bx bx-world'></i> " + coinName + " Website</a>";
			coinGitLink += "<a href='" + coinGit + "' target='_blank'><i class='bx bxl-github'></i> " + coinName + " Github</a>";
			footerLink += "Copyright Â© 2021 <a href='" + mainWeb + "' target='_blank'>" + poolname + "</a>";
		});
		$("#welcomeSite").html(poolname);
		$("#welcomePool").html(welcomeHead);
		$("#coinLogo").html(coinLogo);
		$("#geckoLogo").html(geckoLogo);
		$("#poolHeader").html(poolHeader);
		$("#poolHeader2").html(poolHeader2);
		$("#discord").html(discordLink);
		$("#telegram").html(telegramLink);
		$("#twitter").html(twitterLink);
		$("#github").html(githubLink);
		$("#coinWebLink").html(coinWebLink);
		$("#coinGitLink").html(coinGitLink);
		$("#footerLink").html(footerLink);
		$("#lastPoolBlocks").html(lastblock);
	})
}

// Load Stats page content
function loadStatsPage() {
	setInterval(
		(function load() {
			loadGeneralData();
			loadStatsData();
			loadStatsTicker();
			loadStatsChart();
			loadStatsPrice();
			return load;
		})(), 5000
	);
}

// Load Stats Page Data
function loadStatsData() {
	return $.ajax(API + "pool_dashboard").done(function (data) {
		var reward = (data[0].stats.networkReward / 100000000).toFixed(4);
		var effort = ((data[0].effort / data[0].stats.networkDiff) * 100).toFixed(2);
		var rshares = (data[0].effort).toFixed(4);
		$("#blockchainHeight").text(data[0].stats.networkBlocks);
		$("#connectedPeers").text(data[0].stats.networkConnections);
		$("#minimumPayment").text(data[0].stats.minPay + " " + data[0].stats.symb);
		$("#poolHashrate").text(_formatter(data[0].poolhash, 3, "H/s"));
		$("#poolMiners").text(data[0].miners + " Miner(s)");
		$("#poolWorkers").text(data[0].workers + " Worker(s)");
		$("#networkHashrate").text(_formatter(data[0].stats.networkHash, 3, "H/s"));
		$("#networkDifficulty").text(_formatter(data[0].stats.networkDiff, 3, "H/s"));
		$("#lastBlockReward").text(baseReward + " " + data[0].stats.symb + " + Tx Fee");
		$("#poolPaymentInterval").text(data[0].intPay);
		$("#poolTTF").text(data[0].ttf);
		$("#poolFee").text(data[0].poolfee + " %");
		$("#payoutSheme").text(data[0].stats.sheme);
		$("#currentEffort").text(effort + " %");
		$("#poolShares").text(rshares);
		$("#infPoolHashrate").text(_formatter(data[0].poolhash, 3, "H/s"));
		$("#infNetworkHashrate").text(_formatter(data[0].stats.networkHash, 3, "H/s"));
		$("#infNetworkDifficulty").text(_formatter(data[0].stats.networkDiff, 3, "H/s"));
	})
}

// Load Stats Page Ticker
function loadStatsTicker() {
	return $.ajax(API + "pool_dashboard").done(function (data) {
		$("#chainheight").text(data[0].stats.networkBlocks);
		$("#minpay").text(data[0].stats.minPay + " " + data[0].stats.symb);
		$("#hashrate").text(_formatter(data[0].poolhash, 3, "H/s"));
		$("#miners").text(data[0].miners + " Miner(s)");
		$("#workers").text(data[0].workers + " Worker(s)");
		$("#nethash").text(_formatter(data[0].stats.networkHash, 3, "H/s"));
		$("#netdiff").text(_formatter(data[0].stats.networkDiff, 3, "H/s"));
		$("#payint").text(data[0].stats.intPay);
		$("#fee").text(data[0].poolfee + " %");
	})
}

// Load Stats Page Charts
function loadStatsChart() {
	return $.ajax(API + "pool_statshistory").done(function (data) {
		labels = [];
		poolHashrate = [];
		networkHashrate = [];
		networkDifficulty = [];
		connectedMiners = [];
		connectedWorkers = [];
		newData = [];
		$.each(data, function (index, value) {
			if (newData.length === 0) {
				newData.push(value)
			} else if (newData.length > 0 && ((value.time - newData[newData.length - 1].time)) > 1200) {
				newData.push(value);
			}
		});
		$.each(newData, function (index, value) {
			if (labels.length === 0 || (labels.length + 1) % 2 === 1) {
				var createDate = new Date(value.time * 1000);
				labels.push(createDate.getHours() + ":" + (createDate.getMinutes() < 10 ? '0' : '') + createDate.getMinutes());
			} else {
				labels.push("");
			}
			poolHashrate.push(value.pools.ravencoin.hashrate);
			networkHashrate.push(value.pools.ravencoin.networkHash);
			networkDifficulty.push(value.pools.ravencoin.networkDiff);
			connectedMiners.push(value.pools.ravencoin.minerCount);
			connectedWorkers.push(value.pools.ravencoin.workerCount);
		});
		var dataPoolHash = { labels: labels, series: [poolHashrate] };
		var dataNetHash = { labels: labels, series: [networkHashrate] };
		var dataNetDiff = { labels: labels, series: [networkDifficulty] };
		var dataPoolMiners = { labels: labels, series: [connectedMiners] };
		var dataPoolWorkers = { labels: labels, series: [connectedWorkers] };
		var chartPoolHash = {
			height: "377px", showArea: true, showPoint: false, seriesBarDistance: 1, axisX: { showGrid: false },
			fullWidth: true, chartPadding: { right: 5, left: -5, bottom: -15, top: 10 },
			axisY: { offset: 47, scale: "logcc", labelInterpolationFnc: function (value) { return _formatter(value, 1, "H/s"); } },
			lineSmooth: Chartist.Interpolation.simple({ divisor: 2 })
		};
		var chartNetHash = {
			height: "125px", showArea: true, showPoint: false, seriesBarDistance: 1, axisX: { showGrid: false },
			fullWidth: true, chartPadding: { right: 5, left: -5, bottom: -15 },
			axisY: { offset: 47, scale: "logcc", labelInterpolationFnc: function (value) { return _formatter(value, 1, "H/s"); } },
			lineSmooth: Chartist.Interpolation.simple({ divisor: 2 })
		};
		var chartNetDiff = {
			height: "125px", showArea: true, showPoint: false, seriesBarDistance: 1, axisX: { showGrid: false },
			fullWidth: true, chartPadding: { right: 5, left: -5, bottom: -15 },
			axisY: { offset: 47, scale: "logcc", labelInterpolationFnc: function (value) { return _formatter(value, 1, "H/s"); } },
			lineSmooth: Chartist.Interpolation.simple({ divisor: 2 })
		};
		var chartPoolMiners = {
			height: "125px", showArea: true, showPoint: false, seriesBarDistance: 1, axisX: { showGrid: false },
			fullWidth: true, chartPadding: { right: 5, left: -10, bottom: -15 },
			axisY: { offset: 47, scale: "logcc", labelInterpolationFnc: function (value) { return _formatter(value, 1, ""); } },
			lineSmooth: Chartist.Interpolation.simple({ divisor: 2 })
		};
		var chartPoolWorkers = {
			height: "125px", showArea: true, showPoint: false, seriesBarDistance: 1, axisX: { showGrid: false },
			fullWidth: true, chartPadding: { right: 5, left: -20, bottom: -15 },
			axisY: { offset: 47, scale: "logcc", labelInterpolationFnc: function (value) { return _formatter(value, 1, ""); } },
			lineSmooth: Chartist.Interpolation.simple({ divisor: 2 })
		};
		var responsiveOptions = [["screen and (max-width: 640px)", { axisX: { labelInterpolationFnc: function (value) { return value[1]; } } }]];
		Chartist.Line("#statsPoolHash", dataPoolHash, chartPoolHash, responsiveOptions);
		Chartist.Line("#statsNetHash", dataNetHash, chartNetHash, responsiveOptions);
		Chartist.Line("#statsNetDiff", dataNetDiff, chartNetDiff, responsiveOptions);
		Chartist.Line("#statsPoolMiners", dataPoolMiners, chartPoolMiners, responsiveOptions);
		Chartist.Line("#statsPoolWorkers", dataPoolWorkers, chartPoolWorkers, responsiveOptions);
	})
}

// Load Stats Page Price
function loadStatsPrice() {
	return $.ajax(geckoAPI + geckoCOIN).done(function (data) {
		price = (data.market_data.current_price.usd).toFixed(2);
		blockRewardUSD = (baseReward * price).toFixed(2);
		$("#coinToUSD").html("$ " + data.market_data.current_price.usd.toFixed(4));
		$("#coinToBTC").html(data.market_data.current_price.btc.toFixed(8));
		$("#priceHigh").html("$ " + data.market_data.high_24h.usd.toFixed(4));
		$("#priceHighBTC").html(data.market_data.high_24h.btc.toFixed(8));
		$("#priceLow").html("$ " + data.market_data.low_24h.usd.toFixed(4));
		$("#priceLowBTC").html(data.market_data.low_24h.btc.toFixed(8));
		$("#changeBTC").html(data.market_data.price_change_24h_in_currency.btc.toFixed(8));
		$("#changeBTCPercent").html(data.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2) + " %");
		$("#marketCap").html(data.market_data.market_cap_rank);
		$("#blockToUSD").text("$" + blockRewardUSD);
		$("#genesisDate").html(data.genesis_date);
	});
}


// Load Blocks Page Content
function loadBlocksOverviewPage() {
	setInterval(
		(function load() {
			loadGeneralData();
			loadBlocksPage();
			loadAvgLuck16Page();
			loadAvgTotalPage();
			return load;
		})(), 5000
	);
}

// Load Blocks Page
function loadBlocksPage() {
	return $.ajax(API + "pool_dashboard").done(function (data) {
		chainheight = data[0].stats.networkBlocks;
	}),
		$.ajax(API + "pool_blocks50").done(function (data) {
			var blockList = "";
			var blockLink = data[0].blocklink;
			var addressLink = data[0].addresslink;
			var symb = data[0].symbol;
			$.each(data[0].blocks, function (index, value) {
				var createDate = convertUTCDateToLocalDate(new Date(value.time), false);
				convertedDate = dateConvertor(createDate);
				blockheight = value.height;
				finder = value.finder;
				diff = value.difficulty;
				hash = value.hash;
				var confirm = chainheight - blockheight;
				var effort = ((value.effort / value.difficulty) * 100).toFixed(2);
				var reward = (value.reward / 100000000).toFixed(4);
				var effortClass = "";
				if (effort < 100) {
					effortClass = "effort1";
				} else if (effort < 200) {
					effortClass = "effort2";
				} else if (effort < 500) {
					effortClass = "effort3";
				} else {
					effortClass = "effort4";
				}
				var confclass = "";
				if (confirm < 100) {
					confclass = confirm;
				} else {
					confclass = "100";
				}
				blockList += "<tr>";
				blockList += "<td class='text-white'>" + convertedDate + "</td>";
				blockList += "<td class='text-white'><a href='" + blockLink + hash + "' target='_blank'>" + blockheight + "</a></td>";
				blockList += "<td class='text-white'><a href='" + blockLink + hash + "' target='_blank'>" + hash.substring(0, 8) + " &hellip; " + hash.substring(hash.length - 8) + "</a></td>";
				blockList += "<td class='text-white'>" + _formatter(diff, 5, "H/s") + "</td>";
				blockList += "<td class='text-white'><a href='dashboard.html?#" + currentPool + "/stats?address=" + finder.substring(0, 34) + "'>" + finder.substring(0, 34) + "</td>";
				blockList += "<td><span class='" + effortClass + "'>" + effort + "%</span></td>";
				blockList += "<td class='text-white'>" + reward + " " + symb + "</td>";
				blockList += "<td><div class='progress-bar progress-bar-striped bg-lucky progress-bar-animated' role='progressbar' aria-valuenow='" + confclass + "' aria-valuemin='0' aria-valuemax='100' style='width: " + confclass + "%'><span class='text-white'>" + confclass + "% Completed</span></div></td>";
				blockList += "</tr>";
			});
			$("#blockList").html(blockList);
		})
}

// Load Luck 16
function loadAvgLuck16Page() {
	return $.ajax(API + "pool_blocks15").done(function (data) {
		var total = 0;
		var luckList16 = "";
		$.each(data[0].blocks, function (index, value) {
			total += parseFloat(value.effort / value.difficulty);
			var avg = ((total * 100) / data[0].blocks.length).toFixed(2);
			var effortClass = "";
			if (avg < 100) {
				effortClass = "effort1";
			} else if (avg < 200) {
				effortClass = "effort2";
			} else if (avg < 500) {
				effortClass = "effort3";
			} else {
				effortClass = "effort4";
			}
			luckList16 = "<span class='" + effortClass + "'>" + avg + " %</span>";
		});
		$("#avgLuck16").html(luckList16);
	})
}

// Load Total Luck                  
function loadAvgTotalPage() {
	return $.ajax(API + "pool_blocksall").done(function (data) {
		var symb = data[0].symbol;
		var total = 0;
		var totalCoin = 0;
		var luckListAll = "";
		$.each(data[0].blocks, function (index, value) {
			total += parseFloat(value.effort / value.difficulty);
			totalCoin += value.reward;
			var avg = ((total * 100) / data[0].blocks.length).toFixed(2);
			var effortClass = "";
			if (avg < 100) {
				effortClass = "effort1";
			} else if (avg < 200) {
				effortClass = "effort2";
			} else if (avg < 500) {
				effortClass = "effort3";
			} else {
				effortClass = "effort4";
			}
			luckListAll = "<span class='" + effortClass + "'>" + avg + " %</span>";
		});
		var coins = (totalCoin / 100000000).toFixed(4);
		$("#avgLuckTotal").html(luckListAll);
		$("#totalBlocks").html(data[0].blocks.length + " Block(s)");
		$("#totalCoins").html(coins + " " + symb);
	})
}

// Load Dashboard page content
function loadDashboardPage() {
	function render() {
		setInterval(
			(function load() {
				loadDashboardData($("#walletAddress").val());
				loadDashboardWorkerList($("#walletAddress").val());
				loadDashboardChart($("#walletAddress").val());
				loadAvgHashPage($("#walletAddress").val());
				loadMinerAddressPage($("#walletAddress").val());
				return load;
			})(), 5000
		);
	}
	setInterval(
		(function load() {
			loadGeneralData();
			return load;
		})(), 5000
	);
	var walletQueryString = window.location.hash.split(/[#/?]/)[3];
	if (walletQueryString) {
		var wallet = window.location.hash.split(/[#/?]/)[3].replace("address=", "");
		if (wallet) {
			$(walletAddress).val(wallet);
			localStorage.setItem(currentPool + "-walletAddress", wallet);
			render();
		}
	}
	if (localStorage[currentPool + "-walletAddress"]) {
		$("#walletAddress").val(localStorage[currentPool + "-walletAddress"]);
	}
}

// Load Dashboard wallet
function loadWallet() {
	console.log('Loading wallet address:', $("#walletAddress").val());
	if ($("#walletAddress").val().length > 0) {
		localStorage.setItem(currentPool + "-walletAddress", $("#walletAddress").val());
	}
	var coin = window.location.hash.split(/[#/?]/)[1];
	var currentPage = window.location.hash.split(/[#/?]/)[2] || "stats";
	window.location.href = "#" + currentPool + "/" + currentPage + "?address=" + $("#walletAddress").val();
}

// Load Dashboard page data
function loadDashboardData(walletAddress) {
	return $.ajax(API + "worker_stats?" + walletAddress).done(function (data) {
		cTicker = data.coinTicker;
		coins = (data.balance + data.paid).toFixed(4);
		pHash = data.totalPoolHash;
		mHash = data.totalHash;
		poolPercent = ((mHash * 100) / pHash).toFixed(2);
		$("#minerAddress").text(data.mineraddress);
		$("#minerHashrate").text(_formatter(data.totalHash, 3, "H/s"));
		$("#pendingBalance").text(_formatter(data.balance, 5, ""));
		$("#lifetimeBalance").text(coins + " " + cTicker);
		$("#minerPercent").text(poolPercent + " %");
	})
}

// Load Dashboard Page Worker
function loadDashboardWorkerList(walletAddress) {
	return $.ajax(API + "worker_stats?" + walletAddress).done(function (data) {
		var workerList = "";
		if (data.workers) {
			var workerCount = 0;
			$.each(data.workers, function (index, value) {
				workerCount++;
				start = new Date(value.lastShare).valueOf();
				end = new Date().getTime();
				lastShareDiff = timeDiffSec(start, end);
				workerList += "<tr>";
				workerList += "<td class='text-success'><b>" + workerCount + "</b></td>";
				if (index.length === 0) {
					workerList += "<td class='text-white'>Unnamed</td>";
				} else {
					workerList += "<td class='text-white'>" + index.split(".")[1] + "</td>";
				}
				workerList += "<td class='text-white'>" + _formatter(value.hashrate, 3, "H/s") + "</td>";
				workerList += "<td class='text-white'>" + lastShareDiff + " ago</td>";
				workerList += "</tr>";
			});
		} else {
			workerList += '<tr><td  class="text-danger" colspan="4">No Worker Connected</td></tr>';
		}
		$("#workerCount").text(workerCount);
		$("#workerList").html(workerList);
	})
}

// Load Dashboard Page Chart
function loadDashboardChart(walletAddress) {
	return $.ajax(API + "worker_stats?" + walletAddress).done(function (data) {
		wallet = data.mineraddress;
		labels = [];
		minerHashrate = [];
		$.each(data.historyminer[wallet], function (index, value) {
			if (labels.length === 0 || (labels.length + 1) % 12 === 1) {
				var createDate = new Date(value.time * 1000);
				labels.push(createDate.getHours() + ":" + (createDate.getMinutes() < 10 ? '0' : '') + createDate.getMinutes());
			} else {
				labels.push("");
			}
			minerHashrate.push(value.hashrate);
		});
		var data = { labels: labels, series: [minerHashrate] };
		var options = {
			height: "300px", showArea: true, showPoint: false, seriesBarDistance: 1, axisX: { showGrid: false },
			fullWidth: true, chartPadding: { right: 10, left: -5, bottom: -10, top: 10 },
			axisY: { offset: 47, labelInterpolationFnc: function (value) { return _formatter(value, 1, "H/s"); } },
			lineSmooth: Chartist.Interpolation.simple({ divisor: 2 })
		};
		var responsiveOptions = [["screen and (max-width: 640px)", { axisX: { labelInterpolationFnc: function (value) { return value[0]; } } }]];
		Chartist.Line("#chartDashboardHashrate", data, options, responsiveOptions);
	})
}

// Load Dashboard Page Average Hash
function loadAvgHashPage(walletAddress) {
	return $.ajax(API + "worker_stats?" + walletAddress).done(function (data) {
		wallet = data.mineraddress;
		var total = 0;
		$.each(data.historyminer[wallet], function (index, value) {
			total += value.hashrate;
		})
		var avg = (total / data.historyminer[wallet].length).toFixed(2);
		$("#avgHash").html(_formatter(avg, 3, "H/s"));
	})
}

// Load Dashboard Page Miner Adress
function loadMinerAddressPage(walletAddress) {
	return $.ajax(API + "worker_stats?" + walletAddress).done(function (data) {
		cTicker = data.coinTicker;
		var poolshares = data.totalPoolShares;
		var breward = data.lastBlockReward;
		$.each(data.miner, function (index, value) {
			roundShares = value.currRoundShares;
		})
		var shareDominance = ((roundShares * 100) / poolshares).toFixed(2);
		var shares = (roundShares).toFixed(4);
		var cshares = ((roundShares * 100) / poolshares).toFixed(4);
		var creward = (breward / 100000000).toFixed(4);
		var avgpay = ((cshares / 100) * creward).toFixed(4);
		$("#minerShares").html(shares);
		$("#minerSharesDominance").html(shareDominance + " %");
		$("#avgPayout").html(avgpay + " " + cTicker);
	})
}

// Load Miners page content
function loadMinersPage() {
	setInterval(
		(function load() {
			loadGeneralData();
			loadTopMinersPage();
			return load;
		})(), 5000
	);
}

// Load Miners Page Top
function loadTopMinersPage() {
	return $.ajax(API + "pool_miners").done(function (data) {
		var minerList = "";
		if (data[0].miners) {
			var minerCount = 0;
			$.each(data[0].miners, function (index, value) {
				minerCount++;
				start = new Date(value.lastShare).valueOf();
				end = new Date().getTime();
				lastShareDiff = timeDiffSec(start, end);
				invalid = (value.invalidshares).toFixed(2);
				minerList += "<tr>";
				minerList += "<td class='text-success'><b>" + minerCount + "</b></td>";
				minerList += "<td class='text-white'><a href='dashboard.html?#" + currentPool + "/stats?address=" + index + "'>" + index + "</td>";
				minerList += "<td class='text-white'>" + lastShareDiff + " ago</td>";
				minerList += "<td class='text-white'>" + invalid + " % last 12 Hours</td>";
				minerList += "<td class='text-white'>" + _formatter(value.hashrate, 5, "H/s") + "</td>";
				minerList += "</tr>";
			});
		} else {
			minerList += '<tr><td  class="text-danger" colspan="4">No Miner Connected</td></tr>';
		}
		$("#minerList").html(minerList);
	})
}

// Load Payments page content
function loadPaymentsOverviewPage() {
	setInterval(
		(function load() {
			loadGeneralData();
			loadPaymentsPage();
			return load;
		})(), 5000
	);
}

// Load Payments Page
function loadPaymentsPage() {
	return $.ajax(API + "pool_payments").done(function (data) {
		txLink = data[0].txlink;
		symb = data[0].symbol;
		var paymentList = "";
		$.each(data[0].payments, function (index, value) {
			var createDate = convertUTCDateToLocalDate(new Date(value.time), false);
			convertedDate = dateConvertor(createDate);
			reward = parseFloat(value.paid).toFixed(3);
			miners = value.miners;
			txid = value.txid;
			paymentList += "<tr>";
			paymentList += "<td class='text-white'>" + convertedDate + "</td>";
			paymentList += "<td class='text-white'><a href='" + txLink + txid + "' target='_blank'>" + txid.substring(0, 8) + " &hellip; " + txid.substring(txid.length - 8) + "</a></td>";
			paymentList += "<td class='text-white'>" + miners + " miner(s)</td>";
			paymentList += "<td class='text-white'>" + reward + " " + symb + "</td>";
			paymentList += "</tr>";
		});
		$("#paymentList").html(paymentList);
	})
}

// Load Connect Page Content
function loadConnectOverviewPage() {
	setInterval(
		(function load() {
			loadGeneralData();
			loadPortsPage();
			return load;
		})(), 5000
	);
}

// Load Ports Page
function loadPortsPage() {
	return $.ajax(API + "pool_ports").done(function (data) {
		var portsList = "";
		portsList += "<tr>";
		portsList += "<th class='text-white font-18'>Server :</th>";
		portsList += "<td class='text-white font-18' style='text-align:center'>" + server + "</td>";
		portsList += "</tr>";
		$.each(data[0].ports, function (index, value) {
			portsList += "<tr>";
			portsList += "<th class='text-white font-18'>" + value.name + "</th>";
			portsList += "<td class='text-white font-18' style='text-align:center'>Port <span class='text-info font-weight-bold'>" + index + "</span></td>";
			portsList += "</tr>";
		});
		portsList += "<tr>";
		portsList += "<th class='text-white font-18'>Username :</th>";
		portsList += "<td class='text-white font-18' style='text-align:center'>Your Wallet Address</td>";
		portsList += "</tr>";
		portsList += "<tr>";
		portsList += "<th class='text-white font-18'>Password :</th>";
		portsList += "<td class='text-white font-18' style='text-align:center'>X</td>";
		portsList += "</tr>";
		$("#portList").html(portsList);
	})
}
