import React, { Component } from "react";
import Tags from "../elements/Tags"; // Passe den Pfad an

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      currentTags: [],
      inputText: "",
      placeholder: "Suche nach der passenden Anlaufstelle",
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ inputText: value }, () => {
      // Rufen Sie die Callback-Funktion auf, um die Daten an die übergeordnete Komponente zu übergeben
      this.props.onTagsChange(this.state.currentTags, this.state.inputText);
    });
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "," || event.key === " ") {
      const inputText = this.state.inputText.trim();
      if (!inputText || this.state.currentTags.includes(inputText)) {
        // Wenn inputText leer ist oder bereits in den currentTags vorhanden ist, tue nichts
        return;
      }
      this.setState(
        (prevState) => ({
          currentTags: [...prevState.currentTags, inputText],
          inputText: "",
          placeholder: "",
        }),
        () => {
          // Rufe die Callback-Funktion auf, um die Daten an die übergeordnete Komponente zu übergeben
          this.props.onTagsChange(this.state.currentTags, this.state.inputText);
        }
      );
    }
  };

  deleteTag = (tagToRemove) => {
    this.setState(
      (prevState) => ({
        currentTags: prevState.currentTags.filter((tag) => tag !== tagToRemove),
      }),
      () => {
        // Rufe die Callback-Funktion auf, um die Daten an die übergeordnete Komponente zu übergeben
        this.props.onTagsChange(this.state.currentTags, this.state.inputText);
      }
    );
  };

  render() {
    return (
      <div className="w-full bg-fm_weiss mb-8">
        <div className="py-4 max-w-screen-xl px-16 mx-auto">
          <h2 className="text-xl my-8 font-bold">
            Finde die passende Anlaufstelle!
          </h2>
          <div className="w-full">
            <input
              type="text"
              className="w-full mb-8"
              placeholder={this.state.placeholder}
              value={this.state.inputText}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
            <div className=" flex">
              {this.state.currentTags.map((tag, index) => (
                <Tags
                  key={index}
                  tag={tag}
                  onRemoveTag={this.deleteTag}
                  removable={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
