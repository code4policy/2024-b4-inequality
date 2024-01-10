import pandas as pd

# Load the Excel file
file_path = 'hungarywgi.xlsx' # Replace with your file path
df = pd.read_excel(file_path)

# Save as CSV
csv_file_path = 'hungarycsv.csv' # Replace with your desired CSV path
df.to_csv(csv_file_path, index=False)
