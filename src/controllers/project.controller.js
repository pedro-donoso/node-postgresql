import Project from '../models/Project';

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll();
        res.json({
            data: projects
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createProject(req, res) {
    const {
        name,
        priority,
        description,
        deliverydate
    } = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });

        if (newProject) {
            return res.json({
                message: 'Project created successfully',
                data: newProject
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }

    res.send('received');
}

export async function getOneProject(req, res) {
    // extraer ID desde endpoint
    const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id
            }
        });
    
    res.json(project);
}

export async function deleteProject(req, res) {
    const { id } = req.params;
        const deleteRowCount = await Project.destroy({
            where: {
                id
            }
        });
    res.json({
        message: 'Project Deleted successfully',
        count: deleteRowCount
    });
}

export async function updateProject(req, res) {
    // datos que se actualizaran
    const { id } = req.params;
    // nuevos datos 
    const { name, priority, description, deliverydate } = req.body;

    const projects = await Project.findAll({
        atributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
        where: {
            id
        }
    });

    if (projects.length > 0) {
        projects.forEach(async project => {
            await project.update({
                name,
                priority,
                description,
                deliverydate
            });
        })
    }

    return res.json({
        message: 'Project Updated Successfully',
        data: projects
    })   
}