fetch("events.json")
  .then((response) => response.json())
  .then((events) => {
    const list = document.querySelector("#starred");
    item.textContent = `${event.name} - starred ${evnt.starred}`;
    list.appendChild(item);
  });
});
