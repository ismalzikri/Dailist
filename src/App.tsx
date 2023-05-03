import { useState } from "react";
import { Button, EmptyPage, Modal } from "./components";
import "./App.css";

type itemTodo = {
  id: number;
  title: string;
  finished: boolean;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // TODO: use nanoid/cuid to generate random id
  const [todoItems, setTodoItems] = useState<itemTodo[]>([]);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmitTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTodo = {
      id: 100,
      title: formData.get("title")?.toString() || "",
      finished: false,
    };
    setTodoItems([...todoItems, newTodo]);
    setIsModalOpen(!isModalOpen);
  };

  // TODO: Logic for finishing upcoming todos
  // 1. map todo items
  // 2. if todo item has the found id
  // 3. set finished to true
  // useEffect(() => {
  //   const id = 1
  //   const newTodoItems = todoItems.map((todoItem) => {
  //     if (todoItem.id === id) {
  //       return { ...todoItem, finished: true }
  //     }
  //     return todoItem
  //   })
  //   setTodoItems(newTodoItems)
  // })

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
                      <span>
                        0{index + 1}. {todoItem.title}
                      </span>
                      <svg
                        width={32}
                        height={32}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        style={{ cursor: "pointer" }}
                      >
                        <path
                          d="M13.52,24.66a3,3,0,0,1-2.12-.88L5.75,18.12a3,3,0,0,1,0-4.24l.7-.71a3,3,0,0,1,4.25,0L13.52,16,21.3,8.22a3.09,3.09,0,0,1,4.25,0l.7.71a3,3,0,0,1,0,4.24L15.65,23.78A3,3,0,0,1,13.52,24.66ZM8.58,14.29a1,1,0,0,0-.71.3l-.71.7a1,1,0,0,0,0,1.42l5.66,5.65a1,1,0,0,0,1.41,0l10.61-10.6a1,1,0,0,0,0-1.42l-.71-.7a1,1,0,0,0-1.41,0h0l-8.49,8.48a1,1,0,0,1-1.41,0L9.28,14.59A1,1,0,0,0,8.58,14.29ZM22,8.93h0Z"
                          data-name="Layer 63"
                        ></path>
                      </svg>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="wrapper__finished">
              <div className="wrapper__finished__top">
                <span className="wrapper__finished__top__title">Finished</span>
                <button className="wrapper__finished__top__clear">Clear</button>
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
