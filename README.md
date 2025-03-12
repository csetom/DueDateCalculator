# Due Date Calculator

This project is a simple Due Date Calculator that computes the due date based on a submit date and a turnaround time in hours. It utilizes the `ArgumentReader` to gather input from the user and the `DueDateCalculator` for date calculations.

## Features

- Read submit date and turnaround time from user input.
- Calculate the due date by adding the turnaround time to the submit date.
- Output the resulting due date in a specified time zone (CET).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/csetom/DueDateCalculator
   ```

2. Navigate to the project directory:

   ```bash
   cd DueDateCalculator
   ```

3. Install the dependencies (if any):
   ```bash
   npm install
   ```

## Usage

To calculate the due date, ensure you have Node.js installed on your machine. Then run the script as follows:

```bash
cd dist
node index.js <Date> <turnaround in hours>
```

The script will calculate and display the due date in the Hungarian format (hu-HU) within the Central European Time Zone (CET).

### Example:

```bash
$ cd dist
$ node index.js 2025-03-10T09:00 9
$ 2025. 03. 11. 10:00:00
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you'd like to contribute, please fork the repository and submit a pull request with your proposed changes.

## Acknowledgments

- Thank you to contributors and libraries that made this project possible.
