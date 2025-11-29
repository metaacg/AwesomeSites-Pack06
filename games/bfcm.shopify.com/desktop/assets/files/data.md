# Data

What you're seeing on the BFCM Globe is commerce at planetary scale, powered by stream processing data pipelines built to handle Shopify's biggest weekend of the year.

Every arc represents a real order, drawing an as-the-crow-flies path from shop to buyer. Under the hood, Apache FlinkSQL pipelines process a firehose of events to define arcs and compute sales and buyer metrics, and Grafana powers our infrastructure stats.

The data is sent over the browser using Server Sent Events. You can open up your network tab and see the data coming in for our nerd infrastructure stats, sales metrics, and arcs.

-- Joir-dan, Trish, Dimitri
