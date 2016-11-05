/*global qs, qsa, $on, $parent, $delegate */

window.kieker.instrumentFunction(function (window) {
	'use strict';

	/**
      * View that abstracts away the browser's DOM completely.
      * It has two simple entry points:
      *
      *   - bind(eventName, handler)
      *     Takes a todo application event and registers the handler
      *   - render(command, parameterObject)
      *     Renders the given command with the options
      */

	var View = window.kieker.instrumentFunction(function View(template) {
		this.template = template;

		this.ENTER_KEY = 13;
		this.ESCAPE_KEY = 27;

		this.$todoList = qs('.todo-list');
		this.$todoItemCounter = qs('.todo-count');
		this.$clearCompleted = qs('.clear-completed');
		this.$main = qs('.main');
		this.$footer = qs('.footer');
		this.$toggleAll = qs('.toggle-all');
		this.$newTodo = qs('.new-todo');
	});


	View.prototype._removeItem = window.kieker.instrumentFunction(function (id) {
		var elem = qs('[data-id="' + id + '"]');

		if (elem) {
			this.$todoList.removeChild(elem);
		}
	});

	View.prototype._clearCompletedButton = window.kieker.instrumentFunction(function (completedCount, visible) {
		this.$clearCompleted.innerHTML = this.template.clearCompletedButton(completedCount);
		this.$clearCompleted.style.display = visible ? 'block' : 'none';
	});

	View.prototype._setFilter = window.kieker.instrumentFunction(function (currentPage) {
		qs('.filters .selected').className = '';
		qs('.filters [href="#/' + currentPage + '"]').className = 'selected';
	});

	View.prototype._elementComplete = window.kieker.instrumentFunction(function (id, completed) {
		var listItem = qs('[data-id="' + id + '"]');

		if (!listItem) {
			return;
		}

		listItem.className = completed ? 'completed' : '';

		// In case it was toggled from an event and not by clicking the checkbox
		qs('input', listItem).checked = completed;
	});

	View.prototype._editItem = window.kieker.instrumentFunction(function (id, title) {
		var listItem = qs('[data-id="' + id + '"]');

		if (!listItem) {
			return;
		}

		listItem.className = listItem.className + ' editing';

		var input = document.createElement('input');
		input.className = 'edit';

		listItem.appendChild(input);
		input.focus();
		input.value = title;
	});

	View.prototype._editItemDone = window.kieker.instrumentFunction(function (id, title) {
		var listItem = qs('[data-id="' + id + '"]');

		if (!listItem) {
			return;
		}

		var input = qs('input.edit', listItem);
		listItem.removeChild(input);

		listItem.className = listItem.className.replace('editing', '');

		qsa('label', listItem).forEach(window.kieker.instrumentFunction(function (label) {
			label.textContent = title;
		}));
	});

	View.prototype.render = window.kieker.instrumentFunction(function (viewCmd, parameter) {
		var self = this;
		var viewCommands = {
			showEntries: window.kieker.instrumentFunction(function () {
				self.$todoList.innerHTML = self.template.show(parameter);
			}),
			removeItem: window.kieker.instrumentFunction(function () {
				self._removeItem(parameter);
			}),
			updateElementCount: window.kieker.instrumentFunction(function () {
				self.$todoItemCounter.innerHTML = self.template.itemCounter(parameter);
			}),
			clearCompletedButton: window.kieker.instrumentFunction(function () {
				self._clearCompletedButton(parameter.completed, parameter.visible);
			}),
			contentBlockVisibility: window.kieker.instrumentFunction(function () {
				self.$main.style.display = self.$footer.style.display = parameter.visible ? 'block' : 'none';
			}),
			toggleAll: window.kieker.instrumentFunction(function () {
				self.$toggleAll.checked = parameter.checked;
			}),
			setFilter: window.kieker.instrumentFunction(function () {
				self._setFilter(parameter);
			}),
			clearNewTodo: window.kieker.instrumentFunction(function () {
				self.$newTodo.value = '';
			}),
			elementComplete: window.kieker.instrumentFunction(function () {
				self._elementComplete(parameter.id, parameter.completed);
			}),
			editItem: window.kieker.instrumentFunction(function () {
				self._editItem(parameter.id, parameter.title);
			}),
			editItemDone: window.kieker.instrumentFunction(function () {
				self._editItemDone(parameter.id, parameter.title);
			})
		};

		viewCommands[viewCmd]();
	});

	View.prototype._itemId = window.kieker.instrumentFunction(function (element) {
		var li = $parent(element, 'li');
		return parseInt(li.dataset.id, 10);
	});

	View.prototype._bindItemEditDone = window.kieker.instrumentFunction(function (handler) {
		var self = this;
		$delegate(self.$todoList, 'li .edit', 'blur', window.kieker.instrumentFunction(function () {
			if (!this.dataset.iscanceled) {
				handler({
					id: self._itemId(this),
					title: this.value
				});
			}
		}));

		$delegate(self.$todoList, 'li .edit', 'keypress', window.kieker.instrumentFunction(function (event) {
			if (event.keyCode === self.ENTER_KEY) {
				// Remove the cursor from the input when you hit enter just like if it
				// were a real form
				this.blur();
			}
		}));
	});

	View.prototype._bindItemEditCancel = window.kieker.instrumentFunction(function (handler) {
		var self = this;
		$delegate(self.$todoList, 'li .edit', 'keyup', window.kieker.instrumentFunction(function (event) {
			if (event.keyCode === self.ESCAPE_KEY) {
				this.dataset.iscanceled = true;
				this.blur();

				handler({ id: self._itemId(this) });
			}
		}));
	});

	View.prototype.bind = window.kieker.instrumentFunction(function (event, handler) {
		var self = this;
		if (event === 'newTodo') {
			$on(self.$newTodo, 'change', window.kieker.instrumentFunction(function () {
				handler(self.$newTodo.value);
			}));
		} else if (event === 'removeCompleted') {
			$on(self.$clearCompleted, 'click', window.kieker.instrumentFunction(function () {
				handler();
			}));
		} else if (event === 'toggleAll') {
			$on(self.$toggleAll, 'click', window.kieker.instrumentFunction(function () {
				handler({ completed: this.checked });
			}));
		} else if (event === 'itemEdit') {
			$delegate(self.$todoList, 'li label', 'dblclick', window.kieker.instrumentFunction(function () {
				handler({ id: self._itemId(this) });
			}));
		} else if (event === 'itemRemove') {
			$delegate(self.$todoList, '.destroy', 'click', window.kieker.instrumentFunction(function () {
				handler({ id: self._itemId(this) });
			}));
		} else if (event === 'itemToggle') {
			$delegate(self.$todoList, '.toggle', 'click', window.kieker.instrumentFunction(function () {
				handler({
					id: self._itemId(this),
					completed: this.checked
				});
			}));
		} else if (event === 'itemEditDone') {
			self._bindItemEditDone(handler);
		} else if (event === 'itemEditCancel') {
			self._bindItemEditCancel(handler);
		}
	});

	// Export to window
	window.app = window.app || {};
	window.app.View = View;
})(window);