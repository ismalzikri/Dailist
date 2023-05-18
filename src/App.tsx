import { useState } from "react";
import { nanoid } from "nanoid";
import { Button, EmptyPage, Modal } from "./components";
import checklistIcon from "./assets/checklist.svg";
import checkEditIcon from "./assets/check-mark-box-icon.svg";
import "./App.css";

type TodoItem = {
  id: number;
  title: string;
  finished: boolean;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmitTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTodo = {
      id: parseInt(nanoid(5), 36),
      title: formData.get("title")?.toString() || "",
      finished: false,
    };
    setTodoItems([...todoItems, newTodo]);
    setIsModalOpen(!isModalOpen);
  };

  const handleMarkAsCompleted = (id: number) => {
    const newTodoItems = todoItems.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, finished: true };
      }
      return todoItem;
    });
    setTodoItems(newTodoItems);
  };

  const handleEditTodoItem = (newValue: string) => {
    if (selectedItemIndex === null) return;

    const updatedTodoItems = [...todoItems];
    updatedTodoItems[selectedItemIndex].title = newValue;
    setTodoItems(updatedTodoItems);
    setIsEdit(false);
    setSelectedItemIndex(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedItemIndex === null) return;

    const updatedTodoItems = [...todoItems];
    updatedTodoItems[selectedItemIndex].title = event.target.value;
    setTodoItems(updatedTodoItems);
  };

  const handleInputBlur = () => {
    setIsEdit(false);
    setSelectedItemIndex(null);
  };

  const handleDeleteAllCompleted = () => {
    setTodoItems([]);
  };

  return (
    <main className="App">
      <div className="wrapper">
        <header>
          <h1 className="wrapper__title">Dailist</h1>
        </header>
        {todoItems.length ? (
          <section>
            <div className="wrapper__upcoming">
              <span className="wrapper__upcoming__title">Upcoming</span>
              <ul className="wrapper__upcoming__items">
                {todoItems
                  .filter((todoItem) => !todoItem.finished)
                  .map((todoItem, index) => (
                    <li key={todoItem.id}>
                      {selectedItemIndex === index ? (
                        isEdit ? (
                          <input
                            type="text"
                            value={todoItem.title}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                          />
                        ) : (
                          <span onClick={() => setIsEdit(!isEdit)}>
                            0{index + 1}. {todoItem.title}
                          </span>
                        )
                      ) : (
                        <span onClick={() => setSelectedItemIndex(index)}>
                          0{index + 1}. {todoItem.title}
                        </span>
                      )}
                      {selectedItemIndex === index && isEdit ? (
                        <img
                          width={24}
                          height={24}
                          src={checkEditIcon}
                          alt="checklist-edit-icon"
                          onClick={() => handleEditTodoItem(todoItem.title)}
                        />
                      ) : (
                        <img
                          width={26}
                          height={26}
                          src={checklistIcon}
                          alt="checklist-icon"
                          onClick={() => handleMarkAsCompleted(todoItem.id)}
                        />
                      )}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="wrapper__finished">
              <div className="wrapper__finished__top">
                <span className="wrapper__finished__top__title">Finished</span>
                <button
                  onClick={handleDeleteAllCompleted}
                  className="wrapper__finished__top__clear"
                >
                  Clear
                </button>
              </div>

              <ul className="wrapper__finished__items">
                {todoItems
                  .filter((todoItem) => todoItem.finished)
                  .map((todoItem, index) => (
                    <li key={todoItem.id}>
                      <span>
                        0{index + 1}. {todoItem.title}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </section>
        ) : (
          <EmptyPage />
        )}

        <footer>
          <Button onClick={handleToggleModal} />
          {isModalOpen && (
            <Modal
              handleSubmitTodo={handleSubmitTodo}
              onClose={handleToggleModal}
            />
          )}
        </footer>
      </div>
    </main>
  );
}

export default App;
