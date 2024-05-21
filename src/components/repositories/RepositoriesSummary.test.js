import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays information about the repository", () => {
    // making the data which it will be receiving
    const repository = {
        language: "Javascript",
        stargazers_count: 5,
        forks: 30,
        open_issues: 1,
    };

    render(<RepositoriesSummary repository={repository} />);

    // const language = screen.getByText("Javascript");
    // const starts = screen.getByText(5);
    //
    // expect(language).toBeInTheDocument();
    // expect(starts).toBeInTheDocument();

    //     /// Other ways - without repeating it

    for (let key in repository) {
        const value = repository[key];
        // const element = screen.getByText(value);
        const element = screen.getByText(new RegExp(value));

        expect(element).toBeInTheDocument();
    }
});
