# obsidian-vault-template

## Overview

A template used to create a new vault.  An attempt to move away from Notion to Obsidian.

The setup/organisation is loosely based off PARA, and some templates for logging tasks, and a daily planner

## Setup

1. Clone the repository:
	```
	git clone git@github.com:m-dwyer/obsidian-vault-template.git
	rm -rf obsidian-vault-template/.git
	```

2. Then open the above cloned repository as a vault in Obsidian
3. Go to Settings > Community Plugins and disable 'Safe Mode'
4. Click Browse next to Community Plugins, search for and install the following:
	* Calendar
	* Dataview
	* Day Planner
	* Templater

5.  You'll need to configure plugins as per below:

	*Calendar*

	Set weekly note template to _templates/week
	Set weekly not folder to weeks

	*Templater*

	Set template folder location to _templates

	*Day Planner*

	Set to Command Mode

	*Daily Notes*

	Set new file location to days
	Set template file location to _templates/daily

	*Templates*

	Set template folder location to _templates

## Usage

### Projects

A project is a great way of encapsulating a set of tasks in order to meet some objective, goal or other outcome.

You can create projects in the 001_projects folder using the project template.  The project contains metadata (such as a completed field) in the front matter that can be set, as well as a due date.

### Tasks

A task is an individual action item.  A task can be a one-off item you need to complete by a due date, or it can be an action item as part of a larger project.

A 'task' template is available for individual tasks not associated with a project, while a 'project task' can be used to create a task associated with a larger project.

If you create a project task, be sure to link it to the project in the frontmatter metadata!

### Assigning work

Once you have planned out any projects & tasks you wish to undertake, you can create a weekly agenda by selecting the week number via the calendar side pane.  This will create a new week note under the weeks folder.

When opening up the week, Available Tasks heading will show any incomplete task not yet assigned a date.  From here, I will pick and choose tasks and set an assignedDate accordingly for each, at which point they will be visible for the week under the Assigned Tasks heading.

If I do not wish to undertake a particularly task for this week, I just leave it unassigned, so the task will be visible in future weekly agendas.

### Daily Workflow

Click today's date in the calendar.  Any tasks assigned to today should show in the table.  From here, I will list each task under the Task Times heading with a time.  This will allow me to use the Day Planner to track my progress throughout the day.

The Inbox is basically a scratch pad of sorts, and taken from Getting Things Done.  I will quickly capture items here throughout the day.  At regular intervals, I will look at each item and decide if it should be logged as a task, filed as a note under Resources, or whether some other action needs to be taken.