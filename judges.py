import requests
from bs4 import BeautifulSoup

# URL of the website you want to scrape
url = 'https://www.sci.gov.in/chief-justice-judges/'

# Sending an HTTP GET request
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    print("Page fetched successfully")
    
    # Parse the HTML content with BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the section that contains the details of the judges
    judges_section = soup.find_all('div', class_='views-row')  # This may need adjustment based on the actual HTML structure

    # List to hold judges data
    judges_data = []
    
    # Extracting the required details
    for judge in judges_section:
        # Example for extracting the name and other details
        name = judge.find('h2').text.strip() if judge.find('h2') else 'N/A'
        position = judge.find('div', class_='field-name-field-position').text.strip() if judge.find('div', class_='field-name-field-position') else 'N/A'
        
        # Add to judges data
        judges_data.append({
            'Name': name,
            'Position': position
        })

    # Print the details of judges
    for judge in judges_data:
        print(f"Name: {judge['Name']}, Position: {judge['Position']}")

    print(judges_data)    
else:
    print("Failed to retrieve the page")
