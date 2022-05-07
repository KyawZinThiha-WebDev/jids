# JIDS (Job Information Display System) - ***[Live URL](https://jids.kyawzinthiha.com/)***

This JIDS will help you walk through your job status by different department by auto pagination with infinite loop.

![Landing Page](https://i.imgur.com/gNI9RXx.png)
## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Personalization

### Input Data Format

```json-format
[    
    {        
        "department": "department-name",
        "jobs": [
            {
                "jobTitle": "job-title",
                "priority": priority(1-10),
                "status": status(active | on hold | pending),
                "assignedTo": "department-name",
                "dueDate": date-string
            }
        ]
    }
]
```

### Fetch data from API

```API 
Internal Server Route - /api/data
.
├── next.config.ts
├── server
│   └── api
│       └── data.ts
```

### Pagination Plugin

```Plugin
.
├── next.config.ts
├── plugins
│       └── paginate.ts

# Pagination will be done here and you will need to change the how it work according to your input json format.
```

### Global Config

```Plugin
.
├── next.config.ts
├── pages
│       └── index.vue

# use global config to change the pagination limit.
```