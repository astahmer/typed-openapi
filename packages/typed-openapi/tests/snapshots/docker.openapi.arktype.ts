
  import { type } from "arktype";

// <Schemas>
export const Port = type({ "IP?": type("string"), PrivatePort: type("number.integer"), "PublicPort?": type("number.integer"), Type: type.enumerated("tcp", "udp", "sctp") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "IP": 1, "PrivatePort": 1, "PublicPort": 1, "Type": 1 }, key)));
export type Port = typeof Port.infer;

export const MountPoint = type({ Type: type.enumerated("bind", "volume", "tmpfs", "npipe", "cluster"), Name: type("string"), Source: type("string"), Destination: type("string"), Driver: type("string"), Mode: type("string"), RW: type("boolean"), Propagation: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Type": 1, "Name": 1, "Source": 1, "Destination": 1, "Driver": 1, "Mode": 1, "RW": 1, "Propagation": 1 }, key)));
export type MountPoint = typeof MountPoint.infer;

export const DeviceMapping = type({ PathOnHost: type("string"), PathInContainer: type("string"), CgroupPermissions: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "PathOnHost": 1, "PathInContainer": 1, "CgroupPermissions": 1 }, key)));
export type DeviceMapping = typeof DeviceMapping.infer;

export const DeviceRequest = type({ Driver: type("string"), Count: type("number.integer"), DeviceIDs: type("string").array(), Capabilities: type("string").array().array(), Options: type({ "[string]": type("string") }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Driver": 1, "Count": 1, "DeviceIDs": 1, "Capabilities": 1, "Options": 1 }, key)));
export type DeviceRequest = typeof DeviceRequest.infer;

export const ThrottleDevice = type({ Path: type("string"), Rate: type("number.integer >= 0") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Path": 1, "Rate": 1 }, key)));
export type ThrottleDevice = typeof ThrottleDevice.infer;

export const Mount = type({ Target: type("string"), Source: type("string"), Type: type.enumerated("bind", "volume", "tmpfs", "npipe", "cluster"), ReadOnly: type("boolean"), Consistency: type("string"), BindOptions: type({ Propagation: type.enumerated("private", "rprivate", "shared", "rshared", "slave", "rslave"), NonRecursive: "boolean = false", CreateMountpoint: "boolean = false" }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Propagation": 1, "NonRecursive": 1, "CreateMountpoint": 1 }, key))), VolumeOptions: type({ NoCopy: "boolean = false", Labels: type({ "[string]": type("string") }), DriverConfig: type({ Name: type("string"), Options: type({ "[string]": type("string") }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Options": 1 }, key))) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "NoCopy": 1, "Labels": 1, "DriverConfig": 1 }, key))), TmpfsOptions: type({ SizeBytes: type("number.integer"), Mode: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "SizeBytes": 1, "Mode": 1 }, key))) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Target": 1, "Source": 1, "Type": 1, "ReadOnly": 1, "Consistency": 1, "BindOptions": 1, "VolumeOptions": 1, "TmpfsOptions": 1 }, key)));
export type Mount = typeof Mount.infer;

export const RestartPolicy = type({ Name: type.enumerated("", "no", "always", "unless-stopped", "on-failure"), MaximumRetryCount: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "MaximumRetryCount": 1 }, key)));
export type RestartPolicy = typeof RestartPolicy.infer;

export const Resources = type({ CpuShares: type("number.integer"), Memory: "number.integer = 0", CgroupParent: type("string"), BlkioWeight: type("0 <= number.integer <= 1000"), BlkioWeightDevice: type({ Path: type("string"), Weight: type("number.integer >= 0") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Path": 1, "Weight": 1 }, key))).array(), BlkioDeviceReadBps: ThrottleDevice.array(), BlkioDeviceWriteBps: ThrottleDevice.array(), BlkioDeviceReadIOps: ThrottleDevice.array(), BlkioDeviceWriteIOps: ThrottleDevice.array(), CpuPeriod: type("number.integer"), CpuQuota: type("number.integer"), CpuRealtimePeriod: type("number.integer"), CpuRealtimeRuntime: type("number.integer"), CpusetCpus: type("string"), CpusetMems: type("string"), Devices: DeviceMapping.array(), DeviceCgroupRules: type("string").array(), DeviceRequests: DeviceRequest.array(), KernelMemoryTCP: type("number.integer"), MemoryReservation: type("number.integer"), MemorySwap: type("number.integer"), MemorySwappiness: type("0 <= number.integer <= 100"), NanoCpus: type("number.integer"), OomKillDisable: type("boolean"), Init: type("boolean").or(type("null")), PidsLimit: type("number.integer").or(type("null")), Ulimits: type({ Name: type("string"), Soft: type("number.integer"), Hard: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Soft": 1, "Hard": 1 }, key))).array(), CpuCount: type("number.integer"), CpuPercent: type("number.integer"), IOMaximumIOps: type("number.integer"), IOMaximumBandwidth: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "CpuShares": 1, "Memory": 1, "CgroupParent": 1, "BlkioWeight": 1, "BlkioWeightDevice": 1, "BlkioDeviceReadBps": 1, "BlkioDeviceWriteBps": 1, "BlkioDeviceReadIOps": 1, "BlkioDeviceWriteIOps": 1, "CpuPeriod": 1, "CpuQuota": 1, "CpuRealtimePeriod": 1, "CpuRealtimeRuntime": 1, "CpusetCpus": 1, "CpusetMems": 1, "Devices": 1, "DeviceCgroupRules": 1, "DeviceRequests": 1, "KernelMemoryTCP": 1, "MemoryReservation": 1, "MemorySwap": 1, "MemorySwappiness": 1, "NanoCpus": 1, "OomKillDisable": 1, "Init": 1, "PidsLimit": 1, "Ulimits": 1, "CpuCount": 1, "CpuPercent": 1, "IOMaximumIOps": 1, "IOMaximumBandwidth": 1 }, key)));
export type Resources = typeof Resources.infer;

export const Limit = type({ NanoCPUs: type("number.integer"), MemoryBytes: type("number.integer"), Pids: "number.integer = 0" }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "NanoCPUs": 1, "MemoryBytes": 1, "Pids": 1 }, key)));
export type Limit = typeof Limit.infer;

export const GenericResources = type({ NamedResourceSpec: type({ Kind: type("string"), Value: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Kind": 1, "Value": 1 }, key))), DiscreteResourceSpec: type({ Kind: type("string"), Value: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Kind": 1, "Value": 1 }, key))) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "NamedResourceSpec": 1, "DiscreteResourceSpec": 1 }, key))).array();
export type GenericResources = typeof GenericResources.infer;

export const ResourceObject = type({ NanoCPUs: type("number.integer"), MemoryBytes: type("number.integer"), GenericResources: GenericResources }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "NanoCPUs": 1, "MemoryBytes": 1, "GenericResources": 1 }, key)));
export type ResourceObject = typeof ResourceObject.infer;

export const HealthConfig = type({ Test: type("string").array(), Interval: type("number.integer"), Timeout: type("number.integer"), Retries: type("number.integer"), StartPeriod: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Test": 1, "Interval": 1, "Timeout": 1, "Retries": 1, "StartPeriod": 1 }, key)));
export type HealthConfig = typeof HealthConfig.infer;

export const HealthcheckResult = type({ Start: type("string.date"), End: type("string"), ExitCode: type("number.integer"), Output: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Start": 1, "End": 1, "ExitCode": 1, "Output": 1 }, key))).or(type("null"));
export type HealthcheckResult = typeof HealthcheckResult.infer;

export const Health = type({ Status: type.enumerated("none", "starting", "healthy", "unhealthy"), FailingStreak: type("number.integer"), Log: HealthcheckResult.array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Status": 1, "FailingStreak": 1, "Log": 1 }, key))).or(type("null"));
export type Health = typeof Health.infer;

export const PortBinding = type({ HostIp: type("string"), HostPort: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "HostIp": 1, "HostPort": 1 }, key)));
export type PortBinding = typeof PortBinding.infer;

export const PortMap = type({ "[string]": PortBinding.array().or(type("null")) });
export type PortMap = typeof PortMap.infer;

export const HostConfig = Resources.and(type({ Binds: type("string").array(), ContainerIDFile: type("string"), LogConfig: type({ Type: type.enumerated("json-file", "syslog", "journald", "gelf", "fluentd", "awslogs", "splunk", "etwlogs", "none"), Config: type({ "[string]": type("string") }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Type": 1, "Config": 1 }, key))), NetworkMode: type("string"), PortBindings: PortMap, RestartPolicy: RestartPolicy, AutoRemove: type("boolean"), VolumeDriver: type("string"), VolumesFrom: type("string").array(), Mounts: Mount.array(), ConsoleSize: type("number.integer >= 0").array().or(type("null")), Annotations: type({ "[string]": type("string") }), CapAdd: type("string").array(), CapDrop: type("string").array(), CgroupnsMode: type.enumerated("private", "host"), Dns: type("string").array(), DnsOptions: type("string").array(), DnsSearch: type("string").array(), ExtraHosts: type("string").array(), GroupAdd: type("string").array(), IpcMode: type("string"), Cgroup: type("string"), Links: type("string").array(), OomScoreAdj: type("number.integer"), PidMode: type("string"), Privileged: type("boolean"), PublishAllPorts: type("boolean"), ReadonlyRootfs: type("boolean"), SecurityOpt: type("string").array(), StorageOpt: type({ "[string]": type("string") }), Tmpfs: type({ "[string]": type("string") }), UTSMode: type("string"), UsernsMode: type("string"), ShmSize: type("number.integer >= 0"), Sysctls: type({ "[string]": type("string") }), Runtime: type("string"), Isolation: type.enumerated("default", "process", "hyperv"), MaskedPaths: type("string").array(), ReadonlyPaths: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Binds": 1, "ContainerIDFile": 1, "LogConfig": 1, "NetworkMode": 1, "PortBindings": 1, "RestartPolicy": 1, "AutoRemove": 1, "VolumeDriver": 1, "VolumesFrom": 1, "Mounts": 1, "ConsoleSize": 1, "Annotations": 1, "CapAdd": 1, "CapDrop": 1, "CgroupnsMode": 1, "Dns": 1, "DnsOptions": 1, "DnsSearch": 1, "ExtraHosts": 1, "GroupAdd": 1, "IpcMode": 1, "Cgroup": 1, "Links": 1, "OomScoreAdj": 1, "PidMode": 1, "Privileged": 1, "PublishAllPorts": 1, "ReadonlyRootfs": 1, "SecurityOpt": 1, "StorageOpt": 1, "Tmpfs": 1, "UTSMode": 1, "UsernsMode": 1, "ShmSize": 1, "Sysctls": 1, "Runtime": 1, "Isolation": 1, "MaskedPaths": 1, "ReadonlyPaths": 1 }, key))));
export type HostConfig = typeof HostConfig.infer;

export const ContainerConfig = type({ Hostname: type("string"), Domainname: type("string"), User: type("string"), AttachStdin: "boolean = false", AttachStdout: "boolean = true", AttachStderr: "boolean = true", ExposedPorts: type({ "[string]": type({  }).partial().narrow((data) => Object.keys(data).every((key) => false)) }).or(type("null")), Tty: "boolean = false", OpenStdin: "boolean = false", StdinOnce: "boolean = false", Env: type("string").array(), Cmd: type("string").array(), Healthcheck: HealthConfig, ArgsEscaped: type("boolean").or(type("null")), Image: type("string"), Volumes: type({ "[string]": type({  }).partial().narrow((data) => Object.keys(data).every((key) => false)) }), WorkingDir: type("string"), Entrypoint: type("string").array(), NetworkDisabled: type("boolean").or(type("null")), MacAddress: type("string").or(type("null")), OnBuild: type("string").array().or(type("null")), Labels: type({ "[string]": type("string") }), StopSignal: type("string").or(type("null")), StopTimeout: type("number.integer").or(type("null")), Shell: type("string").array().or(type("null")) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Hostname": 1, "Domainname": 1, "User": 1, "AttachStdin": 1, "AttachStdout": 1, "AttachStderr": 1, "ExposedPorts": 1, "Tty": 1, "OpenStdin": 1, "StdinOnce": 1, "Env": 1, "Cmd": 1, "Healthcheck": 1, "ArgsEscaped": 1, "Image": 1, "Volumes": 1, "WorkingDir": 1, "Entrypoint": 1, "NetworkDisabled": 1, "MacAddress": 1, "OnBuild": 1, "Labels": 1, "StopSignal": 1, "StopTimeout": 1, "Shell": 1 }, key)));
export type ContainerConfig = typeof ContainerConfig.infer;

export const EndpointIPAMConfig = type({ IPv4Address: type("string"), IPv6Address: type("string"), LinkLocalIPs: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "IPv4Address": 1, "IPv6Address": 1, "LinkLocalIPs": 1 }, key))).or(type("null"));
export type EndpointIPAMConfig = typeof EndpointIPAMConfig.infer;

export const EndpointSettings = type({ IPAMConfig: EndpointIPAMConfig, Links: type("string").array(), Aliases: type("string").array(), NetworkID: type("string"), EndpointID: type("string"), Gateway: type("string"), IPAddress: type("string"), IPPrefixLen: type("number.integer"), IPv6Gateway: type("string"), GlobalIPv6Address: type("string"), GlobalIPv6PrefixLen: type("number.integer"), MacAddress: type("string"), DriverOpts: type({ "[string]": type("string") }).or(type("null")) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "IPAMConfig": 1, "Links": 1, "Aliases": 1, "NetworkID": 1, "EndpointID": 1, "Gateway": 1, "IPAddress": 1, "IPPrefixLen": 1, "IPv6Gateway": 1, "GlobalIPv6Address": 1, "GlobalIPv6PrefixLen": 1, "MacAddress": 1, "DriverOpts": 1 }, key)));
export type EndpointSettings = typeof EndpointSettings.infer;

export const NetworkingConfig = type({ EndpointsConfig: type({ "[string]": EndpointSettings }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "EndpointsConfig": 1 }, key)));
export type NetworkingConfig = typeof NetworkingConfig.infer;

export const Address = type({ Addr: type("string"), PrefixLen: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Addr": 1, "PrefixLen": 1 }, key)));
export type Address = typeof Address.infer;

export const NetworkSettings = type({ Bridge: type("string"), SandboxID: type("string"), HairpinMode: type("boolean"), LinkLocalIPv6Address: type("string"), LinkLocalIPv6PrefixLen: type("number.integer"), Ports: PortMap, SandboxKey: type("string"), SecondaryIPAddresses: Address.array().or(type("null")), SecondaryIPv6Addresses: Address.array().or(type("null")), EndpointID: type("string"), Gateway: type("string"), GlobalIPv6Address: type("string"), GlobalIPv6PrefixLen: type("number.integer"), IPAddress: type("string"), IPPrefixLen: type("number.integer"), IPv6Gateway: type("string"), MacAddress: type("string"), Networks: type({ "[string]": EndpointSettings }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Bridge": 1, "SandboxID": 1, "HairpinMode": 1, "LinkLocalIPv6Address": 1, "LinkLocalIPv6PrefixLen": 1, "Ports": 1, "SandboxKey": 1, "SecondaryIPAddresses": 1, "SecondaryIPv6Addresses": 1, "EndpointID": 1, "Gateway": 1, "GlobalIPv6Address": 1, "GlobalIPv6PrefixLen": 1, "IPAddress": 1, "IPPrefixLen": 1, "IPv6Gateway": 1, "MacAddress": 1, "Networks": 1 }, key)));
export type NetworkSettings = typeof NetworkSettings.infer;

export const GraphDriverData = type({ Name: type("string"), Data: type({ "[string]": type("string") }) }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Data": 1 }, key)));
export type GraphDriverData = typeof GraphDriverData.infer;

export const ChangeType = type.enumerated(0, 1, 2);
export type ChangeType = typeof ChangeType.infer;

export const FilesystemChange = type({ Path: type("string"), Kind: ChangeType }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Path": 1, "Kind": 1 }, key)));
export type FilesystemChange = typeof FilesystemChange.infer;

export const ImageInspect = type({ Id: type("string"), RepoTags: type("string").array(), RepoDigests: type("string").array(), Parent: type("string"), Comment: type("string"), Created: type("string"), Container: type("string"), ContainerConfig: ContainerConfig, DockerVersion: type("string"), Author: type("string"), Config: ContainerConfig, Architecture: type("string"), Variant: type("string").or(type("null")), Os: type("string"), OsVersion: type("string").or(type("null")), Size: type("number.integer"), VirtualSize: type("number.integer"), GraphDriver: GraphDriverData, RootFS: type({ Type: type("string"), "Layers?": type("string").array() }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Type": 1, "Layers": 1 }, key))), Metadata: type({ LastTagTime: type("string").or(type("null")) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "LastTagTime": 1 }, key))) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "RepoTags": 1, "RepoDigests": 1, "Parent": 1, "Comment": 1, "Created": 1, "Container": 1, "ContainerConfig": 1, "DockerVersion": 1, "Author": 1, "Config": 1, "Architecture": 1, "Variant": 1, "Os": 1, "OsVersion": 1, "Size": 1, "VirtualSize": 1, "GraphDriver": 1, "RootFS": 1, "Metadata": 1 }, key)));
export type ImageInspect = typeof ImageInspect.infer;

export const ImageSummary = type({ Id: type("string"), ParentId: type("string"), RepoTags: type("string").array(), RepoDigests: type("string").array(), Created: type("number.integer"), Size: type("number.integer"), SharedSize: type("number.integer"), "VirtualSize?": type("number.integer"), Labels: type({ "[string]": type("string") }), Containers: type("number.integer") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "ParentId": 1, "RepoTags": 1, "RepoDigests": 1, "Created": 1, "Size": 1, "SharedSize": 1, "VirtualSize": 1, "Labels": 1, "Containers": 1 }, key)));
export type ImageSummary = typeof ImageSummary.infer;

export const AuthConfig = type({ username: type("string"), password: type("string"), email: type("string"), serveraddress: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "username": 1, "password": 1, "email": 1, "serveraddress": 1 }, key)));
export type AuthConfig = typeof AuthConfig.infer;

export const ProcessConfig = type({ privileged: type("boolean"), user: type("string"), tty: type("boolean"), entrypoint: type("string"), arguments: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "privileged": 1, "user": 1, "tty": 1, "entrypoint": 1, "arguments": 1 }, key)));
export type ProcessConfig = typeof ProcessConfig.infer;

export const ObjectVersion = type({ Index: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Index": 1 }, key)));
export type ObjectVersion = typeof ObjectVersion.infer;

export const Topology = type({ "[string]": type("string") });
export type Topology = typeof Topology.infer;

export const ClusterVolumeSpec = type({ Group: type("string"), AccessMode: type({ Scope: type.enumerated("single", "multi"), Sharing: type.enumerated("none", "readonly", "onewriter", "all"), MountVolume: type({  }).partial().narrow((data) => Object.keys(data).every((key) => false)), Secrets: type({ Key: type("string"), Secret: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Key": 1, "Secret": 1 }, key))).array(), AccessibilityRequirements: type({ Requisite: Topology.array(), Preferred: Topology.array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Requisite": 1, "Preferred": 1 }, key))), CapacityRange: type({ RequiredBytes: type("number.integer"), LimitBytes: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "RequiredBytes": 1, "LimitBytes": 1 }, key))), Availability: type.enumerated("active", "pause", "drain") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Scope": 1, "Sharing": 1, "MountVolume": 1, "Secrets": 1, "AccessibilityRequirements": 1, "CapacityRange": 1, "Availability": 1 }, key))) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Group": 1, "AccessMode": 1 }, key)));
export type ClusterVolumeSpec = typeof ClusterVolumeSpec.infer;

export const ClusterVolume = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Spec: ClusterVolumeSpec, Info: type({ CapacityBytes: type("number.integer"), VolumeContext: type({ "[string]": type("string") }), VolumeID: type("string"), AccessibleTopology: Topology.array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "CapacityBytes": 1, "VolumeContext": 1, "VolumeID": 1, "AccessibleTopology": 1 }, key))), PublishStatus: type({ NodeID: type("string"), State: type.enumerated("pending-publish", "published", "pending-node-unpublish", "pending-controller-unpublish"), PublishContext: type({ "[string]": type("string") }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "NodeID": 1, "State": 1, "PublishContext": 1 }, key))).array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Spec": 1, "Info": 1, "PublishStatus": 1 }, key)));
export type ClusterVolume = typeof ClusterVolume.infer;

export const Volume = type({ Name: type("string"), Driver: type("string"), Mountpoint: type("string"), "CreatedAt?": type("string"), "Status?": type({ "[string]": type({  }).partial().narrow((data) => Object.keys(data).every((key) => false)) }), Labels: type({ "[string]": type("string") }), Scope: type.enumerated("local", "global"), "ClusterVolume?": ClusterVolume, Options: type({ "[string]": type("string") }), "UsageData?": type({ Size: "number.integer = -1", RefCount: "number.integer = -1" }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Size": 1, "RefCount": 1 }, key))).or(type("null")) }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Driver": 1, "Mountpoint": 1, "CreatedAt": 1, "Status": 1, "Labels": 1, "Scope": 1, "ClusterVolume": 1, "Options": 1, "UsageData": 1 }, key)));
export type Volume = typeof Volume.infer;

export const VolumeCreateOptions = type({ Name: type("string"), Driver: "string = \"local\"", DriverOpts: type({ "[string]": type("string") }), Labels: type({ "[string]": type("string") }), ClusterVolumeSpec: ClusterVolumeSpec }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Driver": 1, "DriverOpts": 1, "Labels": 1, "ClusterVolumeSpec": 1 }, key)));
export type VolumeCreateOptions = typeof VolumeCreateOptions.infer;

export const VolumeListResponse = type({ Volumes: Volume.array(), Warnings: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Volumes": 1, "Warnings": 1 }, key)));
export type VolumeListResponse = typeof VolumeListResponse.infer;

export const IPAMConfig = type({ Subnet: type("string"), IPRange: type("string"), Gateway: type("string"), AuxiliaryAddresses: type({ "[string]": type("string") }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Subnet": 1, "IPRange": 1, "Gateway": 1, "AuxiliaryAddresses": 1 }, key)));
export type IPAMConfig = typeof IPAMConfig.infer;

export const IPAM = type({ Driver: "string = \"default\"", Config: IPAMConfig.array(), Options: type({ "[string]": type("string") }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Driver": 1, "Config": 1, "Options": 1 }, key)));
export type IPAM = typeof IPAM.infer;

export const NetworkContainer = type({ Name: type("string"), EndpointID: type("string"), MacAddress: type("string"), IPv4Address: type("string"), IPv6Address: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "EndpointID": 1, "MacAddress": 1, "IPv4Address": 1, "IPv6Address": 1 }, key)));
export type NetworkContainer = typeof NetworkContainer.infer;

export const Network = type({ Name: type("string"), Id: type("string"), Created: type("string"), Scope: type("string"), Driver: type("string"), EnableIPv6: type("boolean"), IPAM: IPAM, Internal: type("boolean"), Attachable: type("boolean"), Ingress: type("boolean"), Containers: type({ "[string]": NetworkContainer }), Options: type({ "[string]": type("string") }), Labels: type({ "[string]": type("string") }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Id": 1, "Created": 1, "Scope": 1, "Driver": 1, "EnableIPv6": 1, "IPAM": 1, "Internal": 1, "Attachable": 1, "Ingress": 1, "Containers": 1, "Options": 1, "Labels": 1 }, key)));
export type Network = typeof Network.infer;

export const ErrorDetail = type({ code: type("number.integer"), message: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "code": 1, "message": 1 }, key)));
export type ErrorDetail = typeof ErrorDetail.infer;

export const ProgressDetail = type({ current: type("number.integer"), total: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "current": 1, "total": 1 }, key)));
export type ProgressDetail = typeof ProgressDetail.infer;

export const ImageID = type({ ID: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1 }, key)));
export type ImageID = typeof ImageID.infer;

export const BuildInfo = type({ id: type("string"), stream: type("string"), error: type("string"), errorDetail: ErrorDetail, status: type("string"), progress: type("string"), progressDetail: ProgressDetail, aux: ImageID }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1, "stream": 1, "error": 1, "errorDetail": 1, "status": 1, "progress": 1, "progressDetail": 1, "aux": 1 }, key)));
export type BuildInfo = typeof BuildInfo.infer;

export const BuildCache = type({ ID: type("string"), Parent: type("string").or(type("null")), Parents: type("string").array().or(type("null")), Type: type.enumerated("internal", "frontend", "source.local", "source.git.checkout", "exec.cachemount", "regular"), Description: type("string"), InUse: type("boolean"), Shared: type("boolean"), Size: type("number.integer"), CreatedAt: type("string"), LastUsedAt: type("string").or(type("null")), UsageCount: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Parent": 1, "Parents": 1, "Type": 1, "Description": 1, "InUse": 1, "Shared": 1, "Size": 1, "CreatedAt": 1, "LastUsedAt": 1, "UsageCount": 1 }, key)));
export type BuildCache = typeof BuildCache.infer;

export const CreateImageInfo = type({ id: type("string"), error: type("string"), errorDetail: ErrorDetail, status: type("string"), progress: type("string"), progressDetail: ProgressDetail }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1, "error": 1, "errorDetail": 1, "status": 1, "progress": 1, "progressDetail": 1 }, key)));
export type CreateImageInfo = typeof CreateImageInfo.infer;

export const PushImageInfo = type({ error: type("string"), status: type("string"), progress: type("string"), progressDetail: ProgressDetail }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "error": 1, "status": 1, "progress": 1, "progressDetail": 1 }, key)));
export type PushImageInfo = typeof PushImageInfo.infer;

export const ErrorResponse = type({ message: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "message": 1 }, key)));
export type ErrorResponse = typeof ErrorResponse.infer;

export const IdResponse = type({ Id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1 }, key)));
export type IdResponse = typeof IdResponse.infer;

export const PluginMount = type({ Name: type("string"), Description: type("string"), Settable: type("string").array(), Source: type("string"), Destination: type("string"), Type: type("string"), Options: type("string").array() }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Description": 1, "Settable": 1, "Source": 1, "Destination": 1, "Type": 1, "Options": 1 }, key)));
export type PluginMount = typeof PluginMount.infer;

export const PluginDevice = type({ Name: type("string"), Description: type("string"), Settable: type("string").array(), Path: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Description": 1, "Settable": 1, "Path": 1 }, key)));
export type PluginDevice = typeof PluginDevice.infer;

export const PluginEnv = type({ Name: type("string"), Description: type("string"), Settable: type("string").array(), Value: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Description": 1, "Settable": 1, "Value": 1 }, key)));
export type PluginEnv = typeof PluginEnv.infer;

export const PluginInterfaceType = type({ Prefix: type("string"), Capability: type("string"), Version: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Prefix": 1, "Capability": 1, "Version": 1 }, key)));
export type PluginInterfaceType = typeof PluginInterfaceType.infer;

export const PluginPrivilege = type({ Name: type("string"), Description: type("string"), Value: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Description": 1, "Value": 1 }, key)));
export type PluginPrivilege = typeof PluginPrivilege.infer;

export const Plugin = type({ "Id?": type("string"), Name: type("string"), Enabled: type("boolean"), Settings: type({ Mounts: PluginMount.array(), Env: type("string").array(), Args: type("string").array(), Devices: PluginDevice.array() }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Mounts": 1, "Env": 1, "Args": 1, "Devices": 1 }, key))), "PluginReference?": type("string"), Config: type({ "DockerVersion?": type("string"), Description: type("string"), Documentation: type("string"), Interface: type({ Types: PluginInterfaceType.array(), Socket: type("string"), "ProtocolScheme?": type.enumerated("", "moby.plugins.http/v1") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Types": 1, "Socket": 1, "ProtocolScheme": 1 }, key))), Entrypoint: type("string").array(), WorkDir: type("string"), "User?": type({ UID: type("number.integer"), GID: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "UID": 1, "GID": 1 }, key))), Network: type({ Type: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Type": 1 }, key))), Linux: type({ Capabilities: type("string").array(), AllowAllDevices: type("boolean"), Devices: PluginDevice.array() }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Capabilities": 1, "AllowAllDevices": 1, "Devices": 1 }, key))), PropagatedMount: type("string"), IpcHost: type("boolean"), PidHost: type("boolean"), Mounts: PluginMount.array(), Env: PluginEnv.array(), Args: type({ Name: type("string"), Description: type("string"), Settable: type("string").array(), Value: type("string").array() }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Description": 1, "Settable": 1, "Value": 1 }, key))), "rootfs?": type({ type: type("string"), diff_ids: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "type": 1, "diff_ids": 1 }, key))) }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "DockerVersion": 1, "Description": 1, "Documentation": 1, "Interface": 1, "Entrypoint": 1, "WorkDir": 1, "User": 1, "Network": 1, "Linux": 1, "PropagatedMount": 1, "IpcHost": 1, "PidHost": 1, "Mounts": 1, "Env": 1, "Args": 1, "rootfs": 1 }, key))) }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "Name": 1, "Enabled": 1, "Settings": 1, "PluginReference": 1, "Config": 1 }, key)));
export type Plugin = typeof Plugin.infer;

export const NodeSpec = type({ Name: type("string"), Labels: type({ "[string]": type("string") }), Role: type.enumerated("worker", "manager"), Availability: type.enumerated("active", "pause", "drain") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Labels": 1, "Role": 1, "Availability": 1 }, key)));
export type NodeSpec = typeof NodeSpec.infer;

export const Platform = type({ Architecture: type("string"), OS: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Architecture": 1, "OS": 1 }, key)));
export type Platform = typeof Platform.infer;

export const EngineDescription = type({ EngineVersion: type("string"), Labels: type({ "[string]": type("string") }), Plugins: type({ Type: type("string"), Name: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Type": 1, "Name": 1 }, key))).array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "EngineVersion": 1, "Labels": 1, "Plugins": 1 }, key)));
export type EngineDescription = typeof EngineDescription.infer;

export const TLSInfo = type({ TrustRoot: type("string"), CertIssuerSubject: type("string"), CertIssuerPublicKey: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "TrustRoot": 1, "CertIssuerSubject": 1, "CertIssuerPublicKey": 1 }, key)));
export type TLSInfo = typeof TLSInfo.infer;

export const NodeDescription = type({ Hostname: type("string"), Platform: Platform, Resources: ResourceObject, Engine: EngineDescription, TLSInfo: TLSInfo }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Hostname": 1, "Platform": 1, "Resources": 1, "Engine": 1, "TLSInfo": 1 }, key)));
export type NodeDescription = typeof NodeDescription.infer;

export const NodeState = type.enumerated("unknown", "down", "ready", "disconnected");
export type NodeState = typeof NodeState.infer;

export const NodeStatus = type({ State: NodeState, Message: type("string"), Addr: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "State": 1, "Message": 1, "Addr": 1 }, key)));
export type NodeStatus = typeof NodeStatus.infer;

export const Reachability = type.enumerated("unknown", "unreachable", "reachable");
export type Reachability = typeof Reachability.infer;

export const ManagerStatus = type({ Leader: "boolean = false", Reachability: Reachability, Addr: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Leader": 1, "Reachability": 1, "Addr": 1 }, key))).or(type("null"));
export type ManagerStatus = typeof ManagerStatus.infer;

export const Node = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Spec: NodeSpec, Description: NodeDescription, Status: NodeStatus, ManagerStatus: ManagerStatus }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Spec": 1, "Description": 1, "Status": 1, "ManagerStatus": 1 }, key)));
export type Node = typeof Node.infer;

export const SwarmSpec = type({ Name: type("string"), Labels: type({ "[string]": type("string") }), Orchestration: type({ TaskHistoryRetentionLimit: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "TaskHistoryRetentionLimit": 1 }, key))).or(type("null")), Raft: type({ SnapshotInterval: type("number.integer"), KeepOldSnapshots: type("number.integer"), LogEntriesForSlowFollowers: type("number.integer"), ElectionTick: type("number.integer"), HeartbeatTick: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "SnapshotInterval": 1, "KeepOldSnapshots": 1, "LogEntriesForSlowFollowers": 1, "ElectionTick": 1, "HeartbeatTick": 1 }, key))), Dispatcher: type({ HeartbeatPeriod: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "HeartbeatPeriod": 1 }, key))).or(type("null")), CAConfig: type({ NodeCertExpiry: type("number.integer"), ExternalCAs: type({ Protocol: type("'cfssl'"), URL: type("string"), Options: type({ "[string]": type("string") }), CACert: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Protocol": 1, "URL": 1, "Options": 1, "CACert": 1 }, key))).array(), SigningCACert: type("string"), SigningCAKey: type("string"), ForceRotate: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "NodeCertExpiry": 1, "ExternalCAs": 1, "SigningCACert": 1, "SigningCAKey": 1, "ForceRotate": 1 }, key))).or(type("null")), EncryptionConfig: type({ AutoLockManagers: type("boolean") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "AutoLockManagers": 1 }, key))), TaskDefaults: type({ LogDriver: type({ Name: type("string"), Options: type({ "[string]": type("string") }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Options": 1 }, key))) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "LogDriver": 1 }, key))) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Labels": 1, "Orchestration": 1, "Raft": 1, "Dispatcher": 1, "CAConfig": 1, "EncryptionConfig": 1, "TaskDefaults": 1 }, key)));
export type SwarmSpec = typeof SwarmSpec.infer;

export const ClusterInfo = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Spec: SwarmSpec, TLSInfo: TLSInfo, RootRotationInProgress: type("boolean"), DataPathPort: type("number.integer"), DefaultAddrPool: type("string").array(), SubnetSize: type("number.integer <= 29") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Spec": 1, "TLSInfo": 1, "RootRotationInProgress": 1, "DataPathPort": 1, "DefaultAddrPool": 1, "SubnetSize": 1 }, key))).or(type("null"));
export type ClusterInfo = typeof ClusterInfo.infer;

export const JoinTokens = type({ Worker: type("string"), Manager: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Worker": 1, "Manager": 1 }, key)));
export type JoinTokens = typeof JoinTokens.infer;

export const Swarm = ClusterInfo.and(type({ JoinTokens: JoinTokens }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "JoinTokens": 1 }, key))));
export type Swarm = typeof Swarm.infer;

export const NetworkAttachmentConfig = type({ Target: type("string"), Aliases: type("string").array(), DriverOpts: type({ "[string]": type("string") }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Target": 1, "Aliases": 1, "DriverOpts": 1 }, key)));
export type NetworkAttachmentConfig = typeof NetworkAttachmentConfig.infer;

export const TaskSpec = type({ PluginSpec: type({ Name: type("string"), Remote: type("string"), Disabled: type("boolean"), PluginPrivilege: PluginPrivilege.array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Remote": 1, "Disabled": 1, "PluginPrivilege": 1 }, key))), ContainerSpec: type({ Image: type("string"), Labels: type({ "[string]": type("string") }), Command: type("string").array(), Args: type("string").array(), Hostname: type("string"), Env: type("string").array(), Dir: type("string"), User: type("string"), Groups: type("string").array(), Privileges: type({ CredentialSpec: type({ Config: type("string"), File: type("string"), Registry: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Config": 1, "File": 1, "Registry": 1 }, key))), SELinuxContext: type({ Disable: type("boolean"), User: type("string"), Role: type("string"), Type: type("string"), Level: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Disable": 1, "User": 1, "Role": 1, "Type": 1, "Level": 1 }, key))) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "CredentialSpec": 1, "SELinuxContext": 1 }, key))), TTY: type("boolean"), OpenStdin: type("boolean"), ReadOnly: type("boolean"), Mounts: Mount.array(), StopSignal: type("string"), StopGracePeriod: type("number.integer"), HealthCheck: HealthConfig, Hosts: type("string").array(), DNSConfig: type({ Nameservers: type("string").array(), Search: type("string").array(), Options: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Nameservers": 1, "Search": 1, "Options": 1 }, key))), Secrets: type({ File: type({ Name: type("string"), UID: type("string"), GID: type("string"), Mode: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "UID": 1, "GID": 1, "Mode": 1 }, key))), SecretID: type("string"), SecretName: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "File": 1, "SecretID": 1, "SecretName": 1 }, key))).array(), Configs: type({ File: type({ Name: type("string"), UID: type("string"), GID: type("string"), Mode: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "UID": 1, "GID": 1, "Mode": 1 }, key))), Runtime: type({  }).partial().narrow((data) => Object.keys(data).every((key) => false)), ConfigID: type("string"), ConfigName: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "File": 1, "Runtime": 1, "ConfigID": 1, "ConfigName": 1 }, key))).array(), Isolation: type.enumerated("default", "process", "hyperv"), Init: type("boolean").or(type("null")), Sysctls: type({ "[string]": type("string") }), CapabilityAdd: type("string").array(), CapabilityDrop: type("string").array(), Ulimits: type({ Name: type("string"), Soft: type("number.integer"), Hard: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Soft": 1, "Hard": 1 }, key))).array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Image": 1, "Labels": 1, "Command": 1, "Args": 1, "Hostname": 1, "Env": 1, "Dir": 1, "User": 1, "Groups": 1, "Privileges": 1, "TTY": 1, "OpenStdin": 1, "ReadOnly": 1, "Mounts": 1, "StopSignal": 1, "StopGracePeriod": 1, "HealthCheck": 1, "Hosts": 1, "DNSConfig": 1, "Secrets": 1, "Configs": 1, "Isolation": 1, "Init": 1, "Sysctls": 1, "CapabilityAdd": 1, "CapabilityDrop": 1, "Ulimits": 1 }, key))), NetworkAttachmentSpec: type({ ContainerID: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ContainerID": 1 }, key))), Resources: type({ Limits: Limit, Reservations: ResourceObject }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Limits": 1, "Reservations": 1 }, key))), RestartPolicy: type({ Condition: type.enumerated("none", "on-failure", "any"), Delay: type("number.integer"), MaxAttempts: "number.integer = 0", Window: "number.integer = 0" }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Condition": 1, "Delay": 1, "MaxAttempts": 1, "Window": 1 }, key))), Placement: type({ Constraints: type("string").array(), Preferences: type({ Spread: type({ SpreadDescriptor: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "SpreadDescriptor": 1 }, key))) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Spread": 1 }, key))).array(), MaxReplicas: "number.integer = 0", Platforms: Platform.array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Constraints": 1, "Preferences": 1, "MaxReplicas": 1, "Platforms": 1 }, key))), ForceUpdate: type("number.integer"), Runtime: type("string"), Networks: NetworkAttachmentConfig.array(), LogDriver: type({ Name: type("string"), Options: type({ "[string]": type("string") }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Options": 1 }, key))) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "PluginSpec": 1, "ContainerSpec": 1, "NetworkAttachmentSpec": 1, "Resources": 1, "RestartPolicy": 1, "Placement": 1, "ForceUpdate": 1, "Runtime": 1, "Networks": 1, "LogDriver": 1 }, key)));
export type TaskSpec = typeof TaskSpec.infer;

export const TaskState = type.enumerated("new", "allocated", "pending", "assigned", "accepted", "preparing", "ready", "starting", "running", "complete", "shutdown", "failed", "rejected", "remove", "orphaned");
export type TaskState = typeof TaskState.infer;

export const Task = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Name: type("string"), Labels: type({ "[string]": type("string") }), Spec: TaskSpec, ServiceID: type("string"), Slot: type("number.integer"), NodeID: type("string"), AssignedGenericResources: GenericResources, Status: type({ Timestamp: type("string"), State: TaskState, Message: type("string"), Err: type("string"), ContainerStatus: type({ ContainerID: type("string"), PID: type("number.integer"), ExitCode: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ContainerID": 1, "PID": 1, "ExitCode": 1 }, key))) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Timestamp": 1, "State": 1, "Message": 1, "Err": 1, "ContainerStatus": 1 }, key))), DesiredState: TaskState, JobIteration: ObjectVersion }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Name": 1, "Labels": 1, "Spec": 1, "ServiceID": 1, "Slot": 1, "NodeID": 1, "AssignedGenericResources": 1, "Status": 1, "DesiredState": 1, "JobIteration": 1 }, key)));
export type Task = typeof Task.infer;

export const EndpointPortConfig = type({ Name: type("string"), Protocol: type.enumerated("tcp", "udp", "sctp"), TargetPort: type("number.integer"), PublishedPort: type("number.integer"), PublishMode: type.enumerated("ingress", "host") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Protocol": 1, "TargetPort": 1, "PublishedPort": 1, "PublishMode": 1 }, key)));
export type EndpointPortConfig = typeof EndpointPortConfig.infer;

export const EndpointSpec = type({ Mode: type.enumerated("vip", "dnsrr"), Ports: EndpointPortConfig.array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Mode": 1, "Ports": 1 }, key)));
export type EndpointSpec = typeof EndpointSpec.infer;

export const ServiceSpec = type({ Name: type("string"), Labels: type({ "[string]": type("string") }), TaskTemplate: TaskSpec, Mode: type({ Replicated: type({ Replicas: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Replicas": 1 }, key))), Global: type({  }).partial().narrow((data) => Object.keys(data).every((key) => false)), ReplicatedJob: type({ MaxConcurrent: "number.integer = 1", TotalCompletions: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "MaxConcurrent": 1, "TotalCompletions": 1 }, key))), GlobalJob: type({  }).partial().narrow((data) => Object.keys(data).every((key) => false)) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Replicated": 1, "Global": 1, "ReplicatedJob": 1, "GlobalJob": 1 }, key))), UpdateConfig: type({ Parallelism: type("number.integer"), Delay: type("number.integer"), FailureAction: type.enumerated("continue", "pause", "rollback"), Monitor: type("number.integer"), MaxFailureRatio: type("number"), Order: type.enumerated("stop-first", "start-first") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Parallelism": 1, "Delay": 1, "FailureAction": 1, "Monitor": 1, "MaxFailureRatio": 1, "Order": 1 }, key))), RollbackConfig: type({ Parallelism: type("number.integer"), Delay: type("number.integer"), FailureAction: type.enumerated("continue", "pause"), Monitor: type("number.integer"), MaxFailureRatio: type("number"), Order: type.enumerated("stop-first", "start-first") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Parallelism": 1, "Delay": 1, "FailureAction": 1, "Monitor": 1, "MaxFailureRatio": 1, "Order": 1 }, key))), Networks: NetworkAttachmentConfig.array(), EndpointSpec: EndpointSpec }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Labels": 1, "TaskTemplate": 1, "Mode": 1, "UpdateConfig": 1, "RollbackConfig": 1, "Networks": 1, "EndpointSpec": 1 }, key)));
export type ServiceSpec = typeof ServiceSpec.infer;

export const Service = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Spec: ServiceSpec, Endpoint: type({ Spec: EndpointSpec, Ports: EndpointPortConfig.array(), VirtualIPs: type({ NetworkID: type("string"), Addr: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "NetworkID": 1, "Addr": 1 }, key))).array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Spec": 1, "Ports": 1, "VirtualIPs": 1 }, key))), UpdateStatus: type({ State: type.enumerated("updating", "paused", "completed"), StartedAt: type("string"), CompletedAt: type("string"), Message: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "State": 1, "StartedAt": 1, "CompletedAt": 1, "Message": 1 }, key))), ServiceStatus: type({ RunningTasks: type("number.integer"), DesiredTasks: type("number.integer"), CompletedTasks: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "RunningTasks": 1, "DesiredTasks": 1, "CompletedTasks": 1 }, key))), JobStatus: type({ JobIteration: ObjectVersion, LastExecution: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "JobIteration": 1, "LastExecution": 1 }, key))) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Spec": 1, "Endpoint": 1, "UpdateStatus": 1, "ServiceStatus": 1, "JobStatus": 1 }, key)));
export type Service = typeof Service.infer;

export const ImageDeleteResponseItem = type({ Untagged: type("string"), Deleted: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Untagged": 1, "Deleted": 1 }, key)));
export type ImageDeleteResponseItem = typeof ImageDeleteResponseItem.infer;

export const ServiceUpdateResponse = type({ Warnings: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Warnings": 1 }, key)));
export type ServiceUpdateResponse = typeof ServiceUpdateResponse.infer;

export const ContainerSummary = type({ Id: type("string"), Names: type("string").array(), Image: type("string"), ImageID: type("string"), Command: type("string"), Created: type("number.integer"), Ports: Port.array(), SizeRw: type("number.integer"), SizeRootFs: type("number.integer"), Labels: type({ "[string]": type("string") }), State: type("string"), Status: type("string"), HostConfig: type({ NetworkMode: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "NetworkMode": 1 }, key))), NetworkSettings: type({ Networks: type({ "[string]": EndpointSettings }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Networks": 1 }, key))), Mounts: MountPoint.array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "Names": 1, "Image": 1, "ImageID": 1, "Command": 1, "Created": 1, "Ports": 1, "SizeRw": 1, "SizeRootFs": 1, "Labels": 1, "State": 1, "Status": 1, "HostConfig": 1, "NetworkSettings": 1, "Mounts": 1 }, key)));
export type ContainerSummary = typeof ContainerSummary.infer;

export const Driver = type({ Name: type("string"), "Options?": type({ "[string]": type("string") }) }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Options": 1 }, key)));
export type Driver = typeof Driver.infer;

export const SecretSpec = type({ Name: type("string"), Labels: type({ "[string]": type("string") }), Data: type("string"), Driver: Driver, Templating: Driver }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Labels": 1, "Data": 1, "Driver": 1, "Templating": 1 }, key)));
export type SecretSpec = typeof SecretSpec.infer;

export const Secret = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Spec: SecretSpec }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Spec": 1 }, key)));
export type Secret = typeof Secret.infer;

export const ConfigSpec = type({ Name: type("string"), Labels: type({ "[string]": type("string") }), Data: type("string"), Templating: Driver }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Labels": 1, "Data": 1, "Templating": 1 }, key)));
export type ConfigSpec = typeof ConfigSpec.infer;

export const Config = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Spec: ConfigSpec }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Version": 1, "CreatedAt": 1, "UpdatedAt": 1, "Spec": 1 }, key)));
export type Config = typeof Config.infer;

export const ContainerState = type({ Status: type.enumerated("created", "running", "paused", "restarting", "removing", "exited", "dead"), Running: type("boolean"), Paused: type("boolean"), Restarting: type("boolean"), OOMKilled: type("boolean"), Dead: type("boolean"), Pid: type("number.integer"), ExitCode: type("number.integer"), Error: type("string"), StartedAt: type("string"), FinishedAt: type("string"), Health: Health }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Status": 1, "Running": 1, "Paused": 1, "Restarting": 1, "OOMKilled": 1, "Dead": 1, "Pid": 1, "ExitCode": 1, "Error": 1, "StartedAt": 1, "FinishedAt": 1, "Health": 1 }, key))).or(type("null"));
export type ContainerState = typeof ContainerState.infer;

export const ContainerCreateResponse = type({ Id: type("string"), Warnings: type("string").array() }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "Warnings": 1 }, key)));
export type ContainerCreateResponse = typeof ContainerCreateResponse.infer;

export const ContainerWaitExitError = type({ Message: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Message": 1 }, key)));
export type ContainerWaitExitError = typeof ContainerWaitExitError.infer;

export const ContainerWaitResponse = type({ StatusCode: type("number.integer"), "Error?": ContainerWaitExitError }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "StatusCode": 1, "Error": 1 }, key)));
export type ContainerWaitResponse = typeof ContainerWaitResponse.infer;

export const SystemVersion = type({ Platform: type({ Name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1 }, key))), Components: type({ Name: type("string"), Version: type("string"), "Details?": type({  }).partial().narrow((data) => Object.keys(data).every((key) => false)).or(type("null")) }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Version": 1, "Details": 1 }, key))).array(), Version: type("string"), ApiVersion: type("string"), MinAPIVersion: type("string"), GitCommit: type("string"), GoVersion: type("string"), Os: type("string"), Arch: type("string"), KernelVersion: type("string"), Experimental: type("boolean"), BuildTime: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Platform": 1, "Components": 1, "Version": 1, "ApiVersion": 1, "MinAPIVersion": 1, "GitCommit": 1, "GoVersion": 1, "Os": 1, "Arch": 1, "KernelVersion": 1, "Experimental": 1, "BuildTime": 1 }, key)));
export type SystemVersion = typeof SystemVersion.infer;

export const PluginsInfo = type({ Volume: type("string").array(), Network: type("string").array(), Authorization: type("string").array(), Log: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Volume": 1, "Network": 1, "Authorization": 1, "Log": 1 }, key)));
export type PluginsInfo = typeof PluginsInfo.infer;

export const IndexInfo = type({ Name: type("string"), Mirrors: type("string").array(), Secure: type("boolean"), Official: type("boolean") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "Mirrors": 1, "Secure": 1, "Official": 1 }, key))).or(type("null"));
export type IndexInfo = typeof IndexInfo.infer;

export const RegistryServiceConfig = type({ AllowNondistributableArtifactsCIDRs: type("string").array(), AllowNondistributableArtifactsHostnames: type("string").array(), InsecureRegistryCIDRs: type("string").array(), IndexConfigs: type({ "[string]": IndexInfo }), Mirrors: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "AllowNondistributableArtifactsCIDRs": 1, "AllowNondistributableArtifactsHostnames": 1, "InsecureRegistryCIDRs": 1, "IndexConfigs": 1, "Mirrors": 1 }, key))).or(type("null"));
export type RegistryServiceConfig = typeof RegistryServiceConfig.infer;

export const Runtime = type({ path: type("string"), runtimeArgs: type("string").array().or(type("null")) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "path": 1, "runtimeArgs": 1 }, key)));
export type Runtime = typeof Runtime.infer;

export const LocalNodeState = type.enumerated("", "inactive", "pending", "active", "error", "locked");
export type LocalNodeState = typeof LocalNodeState.infer;

export const PeerNode = type({ NodeID: type("string"), Addr: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "NodeID": 1, "Addr": 1 }, key)));
export type PeerNode = typeof PeerNode.infer;

export const SwarmInfo = type({ NodeID: "string = \"\"", NodeAddr: "string = \"\"", LocalNodeState: LocalNodeState, ControlAvailable: "boolean = false", Error: "string = \"\"", RemoteManagers: PeerNode.array().or(type("null")), Nodes: type("number.integer").or(type("null")), Managers: type("number.integer").or(type("null")), Cluster: ClusterInfo }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "NodeID": 1, "NodeAddr": 1, "LocalNodeState": 1, "ControlAvailable": 1, "Error": 1, "RemoteManagers": 1, "Nodes": 1, "Managers": 1, "Cluster": 1 }, key)));
export type SwarmInfo = typeof SwarmInfo.infer;

export const Commit = type({ ID: type("string"), Expected: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Expected": 1 }, key)));
export type Commit = typeof Commit.infer;

export const SystemInfo = type({ ID: type("string"), Containers: type("number.integer"), ContainersRunning: type("number.integer"), ContainersPaused: type("number.integer"), ContainersStopped: type("number.integer"), Images: type("number.integer"), Driver: type("string"), DriverStatus: type("string").array().array(), DockerRootDir: type("string"), Plugins: PluginsInfo, MemoryLimit: type("boolean"), SwapLimit: type("boolean"), KernelMemoryTCP: type("boolean"), CpuCfsPeriod: type("boolean"), CpuCfsQuota: type("boolean"), CPUShares: type("boolean"), CPUSet: type("boolean"), PidsLimit: type("boolean"), OomKillDisable: type("boolean"), IPv4Forwarding: type("boolean"), BridgeNfIptables: type("boolean"), BridgeNfIp6tables: type("boolean"), Debug: type("boolean"), NFd: type("number.integer"), NGoroutines: type("number.integer"), SystemTime: type("string"), LoggingDriver: type("string"), CgroupDriver: type.enumerated("cgroupfs", "systemd", "none"), CgroupVersion: type.enumerated("1", "2"), NEventsListener: type("number.integer"), KernelVersion: type("string"), OperatingSystem: type("string"), OSVersion: type("string"), OSType: type("string"), Architecture: type("string"), NCPU: type("number.integer"), MemTotal: type("number.integer"), IndexServerAddress: "string = \"https://index.docker.io/v1/\"", RegistryConfig: RegistryServiceConfig, GenericResources: GenericResources, HttpProxy: type("string"), HttpsProxy: type("string"), NoProxy: type("string"), Name: type("string"), Labels: type("string").array(), ExperimentalBuild: type("boolean"), ServerVersion: type("string"), Runtimes: type({ "[string]": Runtime }), DefaultRuntime: "string = \"runc\"", Swarm: SwarmInfo, LiveRestoreEnabled: "boolean = false", Isolation: type.enumerated("default", "hyperv", "process"), InitBinary: type("string"), ContainerdCommit: Commit, RuncCommit: Commit, InitCommit: Commit, SecurityOptions: type("string").array(), ProductLicense: type("string"), DefaultAddressPools: type({ Base: type("string"), Size: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Base": 1, "Size": 1 }, key))).array(), Warnings: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Containers": 1, "ContainersRunning": 1, "ContainersPaused": 1, "ContainersStopped": 1, "Images": 1, "Driver": 1, "DriverStatus": 1, "DockerRootDir": 1, "Plugins": 1, "MemoryLimit": 1, "SwapLimit": 1, "KernelMemoryTCP": 1, "CpuCfsPeriod": 1, "CpuCfsQuota": 1, "CPUShares": 1, "CPUSet": 1, "PidsLimit": 1, "OomKillDisable": 1, "IPv4Forwarding": 1, "BridgeNfIptables": 1, "BridgeNfIp6tables": 1, "Debug": 1, "NFd": 1, "NGoroutines": 1, "SystemTime": 1, "LoggingDriver": 1, "CgroupDriver": 1, "CgroupVersion": 1, "NEventsListener": 1, "KernelVersion": 1, "OperatingSystem": 1, "OSVersion": 1, "OSType": 1, "Architecture": 1, "NCPU": 1, "MemTotal": 1, "IndexServerAddress": 1, "RegistryConfig": 1, "GenericResources": 1, "HttpProxy": 1, "HttpsProxy": 1, "NoProxy": 1, "Name": 1, "Labels": 1, "ExperimentalBuild": 1, "ServerVersion": 1, "Runtimes": 1, "DefaultRuntime": 1, "Swarm": 1, "LiveRestoreEnabled": 1, "Isolation": 1, "InitBinary": 1, "ContainerdCommit": 1, "RuncCommit": 1, "InitCommit": 1, "SecurityOptions": 1, "ProductLicense": 1, "DefaultAddressPools": 1, "Warnings": 1 }, key)));
export type SystemInfo = typeof SystemInfo.infer;

export const EventActor = type({ ID: type("string"), Attributes: type({ "[string]": type("string") }) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Attributes": 1 }, key)));
export type EventActor = typeof EventActor.infer;

export const EventMessage = type({ Type: type.enumerated("builder", "config", "container", "daemon", "image", "network", "node", "plugin", "secret", "service", "volume"), Action: type("string"), Actor: EventActor, scope: type.enumerated("local", "swarm"), time: type("number.integer"), timeNano: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Type": 1, "Action": 1, "Actor": 1, "scope": 1, "time": 1, "timeNano": 1 }, key)));
export type EventMessage = typeof EventMessage.infer;

export const OCIDescriptor = type({ mediaType: type("string"), digest: type("string"), size: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "mediaType": 1, "digest": 1, "size": 1 }, key)));
export type OCIDescriptor = typeof OCIDescriptor.infer;

export const OCIPlatform = type({ architecture: type("string"), os: type("string"), "os.version": type("string"), "os.features": type("string").array(), variant: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "architecture": 1, "os": 1, "os.version": 1, "os.features": 1, "variant": 1 }, key)));
export type OCIPlatform = typeof OCIPlatform.infer;

export const DistributionInspect = type({ Descriptor: OCIDescriptor, Platforms: OCIPlatform.array() }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Descriptor": 1, "Platforms": 1 }, key)));
export type DistributionInspect = typeof DistributionInspect.infer;
// </Schemas>

// <Endpoints>
export type get_ContainerList = typeof get_ContainerList;
export const get_ContainerList = {
  method: type("'GET'"),
  path: type("'/containers/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ all: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), limit: type("string.integer.parse"), size: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "all": 1, "limit": 1, "size": 1, "filters": 1 }, key))).optional() },
  responses: { 200: ContainerSummary.array(), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerCreate = typeof post_ContainerCreate;
export const post_ContainerCreate = {
  method: type("'POST'"),
  path: type("'/containers/create'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ name: type("string").narrow((s) => typeof s === "string" && new RegExp("^/?[a-zA-Z0-9][a-zA-Z0-9_.-]+$").test(s)), platform: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1, "platform": 1 }, key))).optional(), body: ContainerConfig.and(type({ HostConfig: HostConfig, NetworkingConfig: NetworkingConfig }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "HostConfig": 1, "NetworkingConfig": 1 }, key)))) },
  responses: { 201: ContainerCreateResponse, 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerInspect = typeof get_ContainerInspect;
export const get_ContainerInspect = {
  method: type("'GET'"),
  path: type("'/containers/{id}/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ size: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "size": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type({ Id: type("string"), Created: type("string"), Path: type("string"), Args: type("string").array(), State: ContainerState, Image: type("string"), ResolvConfPath: type("string"), HostnamePath: type("string"), HostsPath: type("string"), LogPath: type("string"), Name: type("string"), RestartCount: type("number.integer"), Driver: type("string"), Platform: type("string"), MountLabel: type("string"), ProcessLabel: type("string"), AppArmorProfile: type("string"), ExecIDs: type("string").array().or(type("null")), HostConfig: HostConfig, GraphDriver: GraphDriverData, SizeRw: type("number.integer"), SizeRootFs: type("number.integer"), Mounts: MountPoint.array(), Config: ContainerConfig, NetworkSettings: NetworkSettings }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "Created": 1, "Path": 1, "Args": 1, "State": 1, "Image": 1, "ResolvConfPath": 1, "HostnamePath": 1, "HostsPath": 1, "LogPath": 1, "Name": 1, "RestartCount": 1, "Driver": 1, "Platform": 1, "MountLabel": 1, "ProcessLabel": 1, "AppArmorProfile": 1, "ExecIDs": 1, "HostConfig": 1, "GraphDriver": 1, "SizeRw": 1, "SizeRootFs": 1, "Mounts": 1, "Config": 1, "NetworkSettings": 1 }, key))), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerTop = typeof get_ContainerTop;
export const get_ContainerTop = {
  method: type("'GET'"),
  path: type("'/containers/{id}/top'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ ps_args: "string = \"-ef\"" }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ps_args": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type({ Titles: type("string").array(), Processes: type("string").array().array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Titles": 1, "Processes": 1 }, key))).or(type({ Titles: type("string").array(), Processes: type("string").array().array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Titles": 1, "Processes": 1 }, key)))), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type get_ContainerLogs = typeof get_ContainerLogs;
export const get_ContainerLogs = {
  method: type("'GET'"),
  path: type("'/containers/{id}/logs'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ follow: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdout: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stderr: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), since: type("string.integer.parse"), until: type("string.integer.parse"), timestamps: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), tail: "string = \"all\"" }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "follow": 1, "stdout": 1, "stderr": 1, "since": 1, "until": 1, "timestamps": 1, "tail": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type("unknown"), 404: type("unknown"), 500: type("unknown") },
};

export type get_ContainerChanges = typeof get_ContainerChanges;
export const get_ContainerChanges = {
  method: type("'GET'"),
  path: type("'/containers/{id}/changes'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: FilesystemChange.array(), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerExport = typeof get_ContainerExport;
export const get_ContainerExport = {
  method: type("'GET'"),
  path: type("'/containers/{id}/export'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type("unknown"), 404: ErrorResponse.or(type("unknown")), 500: ErrorResponse },
};

export type get_ContainerStats = typeof get_ContainerStats;
export const get_ContainerStats = {
  method: type("'GET'"),
  path: type("'/containers/{id}/stats'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ stream: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), "one-shot": type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "stream": 1, "one-shot": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type({ "[string]": type("unknown") }), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerResize = typeof post_ContainerResize;
export const post_ContainerResize = {
  method: type("'POST'"),
  path: type("'/containers/{id}/resize'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ h: type("string.integer.parse"), w: type("string.integer.parse") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "h": 1, "w": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type("unknown"), 404: ErrorResponse.or(type("unknown")), 500: ErrorResponse },
};

export type post_ContainerStart = typeof post_ContainerStart;
export const post_ContainerStart = {
  method: type("'POST'"),
  path: type("'/containers/{id}/start'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ detachKeys: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "detachKeys": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: type("unknown"), 304: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_ContainerStop = typeof post_ContainerStop;
export const post_ContainerStop = {
  method: type("'POST'"),
  path: type("'/containers/{id}/stop'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ signal: type("string"), t: type("string.integer.parse") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "signal": 1, "t": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: type("unknown"), 304: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_ContainerRestart = typeof post_ContainerRestart;
export const post_ContainerRestart = {
  method: type("'POST'"),
  path: type("'/containers/{id}/restart'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ signal: type("string"), t: type("string.integer.parse") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "signal": 1, "t": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_ContainerKill = typeof post_ContainerKill;
export const post_ContainerKill = {
  method: type("'POST'"),
  path: type("'/containers/{id}/kill'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ signal: "string = \"SIGKILL\"" }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "signal": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 409: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_ContainerUpdate = typeof post_ContainerUpdate;
export const post_ContainerUpdate = {
  method: type("'POST'"),
  path: type("'/containers/{id}/update'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: Resources.and(type({ RestartPolicy: RestartPolicy }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "RestartPolicy": 1 }, key)))) },
  responses: { 200: type({ Warnings: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Warnings": 1 }, key))), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRename = typeof post_ContainerRename;
export const post_ContainerRename = {
  method: type("'POST'"),
  path: type("'/containers/{id}/rename'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 409: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_ContainerPause = typeof post_ContainerPause;
export const post_ContainerPause = {
  method: type("'POST'"),
  path: type("'/containers/{id}/pause'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_ContainerUnpause = typeof post_ContainerUnpause;
export const post_ContainerUnpause = {
  method: type("'POST'"),
  path: type("'/containers/{id}/unpause'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_ContainerAttach = typeof post_ContainerAttach;
export const post_ContainerAttach = {
  method: type("'POST'"),
  path: type("'/containers/{id}/attach'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ detachKeys: type("string"), logs: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stream: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdin: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdout: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stderr: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "detachKeys": 1, "logs": 1, "stream": 1, "stdin": 1, "stdout": 1, "stderr": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 101: type("unknown"), 200: type("unknown"), 400: type("unknown"), 404: type("unknown"), 500: type("unknown") },
};

export type get_ContainerAttachWebsocket = typeof get_ContainerAttachWebsocket;
export const get_ContainerAttachWebsocket = {
  method: type("'GET'"),
  path: type("'/containers/{id}/attach/ws'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ detachKeys: type("string"), logs: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stream: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdin: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdout: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stderr: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "detachKeys": 1, "logs": 1, "stream": 1, "stdin": 1, "stdout": 1, "stderr": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 101: type("unknown"), 200: type("unknown"), 400: ErrorResponse.or(ErrorResponse), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_ContainerWait = typeof post_ContainerWait;
export const post_ContainerWait = {
  method: type("'POST'"),
  path: type("'/containers/{id}/wait'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ condition: type.enumerated("not-running", "next-exit", "removed") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "condition": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: ContainerWaitResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_ContainerDelete = typeof delete_ContainerDelete;
export const delete_ContainerDelete = {
  method: type("'DELETE'"),
  path: type("'/containers/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ v: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), link: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "v": 1, "force": 1, "link": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: type("unknown"), 400: ErrorResponse.or(ErrorResponse), 404: ErrorResponse.or(ErrorResponse), 409: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type get_ContainerArchive = typeof get_ContainerArchive;
export const get_ContainerArchive = {
  method: type("'GET'"),
  path: type("'/containers/{id}/archive'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ path: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "path": 1 }, key))), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type("unknown"), 400: type("unknown"), 404: type("unknown"), 500: type("unknown") },
};

export type put_PutContainerArchive = typeof put_PutContainerArchive;
export const put_PutContainerArchive = {
  method: type("'PUT'"),
  path: type("'/containers/{id}/archive'"),
  requestFormat: type("'binary'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ path: type("string"), "noOverwriteDirNonDir?": type("string"), "copyUIDGID?": type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "path": 1, "noOverwriteDirNonDir": 1, "copyUIDGID": 1 }, key))), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: type.instanceOf(Blob) },
  responses: { 200: type("unknown"), 400: ErrorResponse.or(ErrorResponse), 403: ErrorResponse.or(ErrorResponse), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type head_ContainerArchiveInfo = typeof head_ContainerArchiveInfo;
export const head_ContainerArchiveInfo = {
  method: type("'HEAD'"),
  path: type("'/containers/{id}/archive'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ path: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "path": 1 }, key))), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type("unknown"), 400: ErrorResponse.or(ErrorResponse), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
  responseHeaders: { 200: type({ "X-Docker-Container-Path-Stat": type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "X-Docker-Container-Path-Stat": 1 }, key))) },
};

export type post_ContainerPrune = typeof post_ContainerPrune;
export const post_ContainerPrune = {
  method: type("'POST'"),
  path: type("'/containers/prune'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))).optional() },
  responses: { 200: type({ ContainersDeleted: type("string").array(), SpaceReclaimed: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ContainersDeleted": 1, "SpaceReclaimed": 1 }, key))), 500: ErrorResponse },
};

export type get_ImageList = typeof get_ImageList;
export const get_ImageList = {
  method: type("'GET'"),
  path: type("'/images/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ all: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), filters: type("string"), "shared-size": type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), digests: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "all": 1, "filters": 1, "shared-size": 1, "digests": 1 }, key))).optional() },
  responses: { 200: ImageSummary.array(), 500: ErrorResponse },
};

export type post_ImageBuild = typeof post_ImageBuild;
export const post_ImageBuild = {
  method: type("'POST'"),
  path: type("'/build'"),
  requestFormat: type("'binary'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ dockerfile: "string = \"Dockerfile\"", t: type("string"), extrahosts: type("string"), remote: type("string"), q: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), nocache: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), cachefrom: type("string"), pull: type("string"), rm: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), forcerm: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), memory: type("string.integer.parse"), memswap: type("string.integer.parse"), cpushares: type("string.integer.parse"), cpusetcpus: type("string"), cpuperiod: type("string.integer.parse"), cpuquota: type("string.integer.parse"), buildargs: type("string"), shmsize: type("string.integer.parse"), squash: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), labels: type("string"), networkmode: type("string"), platform: type("string"), target: type("string"), outputs: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "dockerfile": 1, "t": 1, "extrahosts": 1, "remote": 1, "q": 1, "nocache": 1, "cachefrom": 1, "pull": 1, "rm": 1, "forcerm": 1, "memory": 1, "memswap": 1, "cpushares": 1, "cpusetcpus": 1, "cpuperiod": 1, "cpuquota": 1, "buildargs": 1, "shmsize": 1, "squash": 1, "labels": 1, "networkmode": 1, "platform": 1, "target": 1, "outputs": 1 }, key))).optional(), header: type({ "Content-type": type("'application/x-tar'"), "X-Registry-Config": type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Content-type": 1, "X-Registry-Config": 1 }, key))).optional(), body: type.instanceOf(Blob) },
  responses: { 200: type("unknown"), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_BuildPrune = typeof post_BuildPrune;
export const post_BuildPrune = {
  method: type("'POST'"),
  path: type("'/build/prune'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ "keep-storage": type("string.integer.parse"), all: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "keep-storage": 1, "all": 1, "filters": 1 }, key))).optional() },
  responses: { 200: type({ CachesDeleted: type("string").array(), SpaceReclaimed: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "CachesDeleted": 1, "SpaceReclaimed": 1 }, key))), 500: ErrorResponse },
};

export type post_ImageCreate = typeof post_ImageCreate;
export const post_ImageCreate = {
  method: type("'POST'"),
  path: type("'/images/create'"),
  requestFormat: type("'text'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ fromImage: type("string"), fromSrc: type("string"), repo: type("string"), tag: type("string"), message: type("string"), changes: type("string").array(), platform: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "fromImage": 1, "fromSrc": 1, "repo": 1, "tag": 1, "message": 1, "changes": 1, "platform": 1 }, key))).optional(), header: type({ "X-Registry-Auth": type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "X-Registry-Auth": 1 }, key))).optional(), body: type("string") },
  responses: { 200: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageInspect = typeof get_ImageInspect;
export const get_ImageInspect = {
  method: type("'GET'"),
  path: type("'/images/{name}/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: ImageInspect, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageHistory = typeof get_ImageHistory;
export const get_ImageHistory = {
  method: type("'GET'"),
  path: type("'/images/{name}/history'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: type({ Id: type("string"), Created: type("number.integer"), CreatedBy: type("string"), Tags: type("string").array(), Size: type("number.integer"), Comment: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "Created": 1, "CreatedBy": 1, "Tags": 1, "Size": 1, "Comment": 1 }, key))).array(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ImagePush = typeof post_ImagePush;
export const post_ImagePush = {
  method: type("'POST'"),
  path: type("'/images/{name}/push'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ tag: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "tag": 1 }, key))).optional(), path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))), header: type({ "X-Registry-Auth": type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "X-Registry-Auth": 1 }, key))) },
  responses: { 200: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_ImageTag = typeof post_ImageTag;
export const post_ImageTag = {
  method: type("'POST'"),
  path: type("'/images/{name}/tag'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ repo: type("string"), tag: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "repo": 1, "tag": 1 }, key))).optional(), path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 201: type("unknown"), 400: ErrorResponse.or(ErrorResponse), 404: ErrorResponse.or(ErrorResponse), 409: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type delete_ImageDelete = typeof delete_ImageDelete;
export const delete_ImageDelete = {
  method: type("'DELETE'"),
  path: type("'/images/{name}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), noprune: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "force": 1, "noprune": 1 }, key))).optional(), path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: ImageDeleteResponseItem.array(), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageSearch = typeof get_ImageSearch;
export const get_ImageSearch = {
  method: type("'GET'"),
  path: type("'/images/search'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ term: type("string"), "limit?": type("string.integer.parse"), "filters?": type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "term": 1, "limit": 1, "filters": 1 }, key))) },
  responses: { 200: type({ description: type("string"), is_official: type("boolean"), is_automated: type("boolean"), name: type("string"), star_count: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "description": 1, "is_official": 1, "is_automated": 1, "name": 1, "star_count": 1 }, key))).array(), 500: ErrorResponse },
};

export type post_ImagePrune = typeof post_ImagePrune;
export const post_ImagePrune = {
  method: type("'POST'"),
  path: type("'/images/prune'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))).optional() },
  responses: { 200: type({ ImagesDeleted: ImageDeleteResponseItem.array(), SpaceReclaimed: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ImagesDeleted": 1, "SpaceReclaimed": 1 }, key))), 500: ErrorResponse },
};

export type post_SystemAuth = typeof post_SystemAuth;
export const post_SystemAuth = {
  method: type("'POST'"),
  path: type("'/auth'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: AuthConfig },
  responses: { 200: type({ Status: type("string"), "IdentityToken?": type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Status": 1, "IdentityToken": 1 }, key))), 204: type("unknown"), 401: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemInfo = typeof get_SystemInfo;
export const get_SystemInfo = {
  method: type("'GET'"),
  path: type("'/info'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: SystemInfo, 500: ErrorResponse },
};

export type get_SystemVersion = typeof get_SystemVersion;
export const get_SystemVersion = {
  method: type("'GET'"),
  path: type("'/version'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: SystemVersion, 500: ErrorResponse },
};

export type get_SystemPing = typeof get_SystemPing;
export const get_SystemPing = {
  method: type("'GET'"),
  path: type("'/_ping'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: type("string"), 500: ErrorResponse },
  responseHeaders: { 200: type({ Swarm: type.enumerated("inactive", "pending", "error", "locked", "active/worker", "active/manager"), "Docker-Experimental": type("boolean"), "Cache-Control": "string = \"no-cache, no-store, must-revalidate\"", Pragma: "string = \"no-cache\"", "API-Version": type("string"), "Builder-Version": "string = \"2\"" }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Swarm": 1, "Docker-Experimental": 1, "Cache-Control": 1, "Pragma": 1, "API-Version": 1, "Builder-Version": 1 }, key))), 500: type({ "Cache-Control": "string = \"no-cache, no-store, must-revalidate\"", Pragma: "string = \"no-cache\"" }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Cache-Control": 1, "Pragma": 1 }, key))) },
};

export type head_SystemPingHead = typeof head_SystemPingHead;
export const head_SystemPingHead = {
  method: type("'HEAD'"),
  path: type("'/_ping'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: type("string"), 500: ErrorResponse },
  responseHeaders: { 200: type({ Swarm: type.enumerated("inactive", "pending", "error", "locked", "active/worker", "active/manager"), "Docker-Experimental": type("boolean"), "Cache-Control": "string = \"no-cache, no-store, must-revalidate\"", Pragma: "string = \"no-cache\"", "API-Version": type("string"), "Builder-Version": type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Swarm": 1, "Docker-Experimental": 1, "Cache-Control": 1, "Pragma": 1, "API-Version": 1, "Builder-Version": 1 }, key))) },
};

export type post_ImageCommit = typeof post_ImageCommit;
export const post_ImageCommit = {
  method: type("'POST'"),
  path: type("'/commit'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ container: type("string"), repo: type("string"), tag: type("string"), comment: type("string"), author: type("string"), pause: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), changes: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "container": 1, "repo": 1, "tag": 1, "comment": 1, "author": 1, "pause": 1, "changes": 1 }, key))).optional(), body: ContainerConfig },
  responses: { 201: IdResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemEvents = typeof get_SystemEvents;
export const get_SystemEvents = {
  method: type("'GET'"),
  path: type("'/events'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ since: type("string"), until: type("string"), filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "since": 1, "until": 1, "filters": 1 }, key))).optional() },
  responses: { 200: EventMessage, 400: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemDataUsage = typeof get_SystemDataUsage;
export const get_SystemDataUsage = {
  method: type("'GET'"),
  path: type("'/system/df'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ type: type.enumerated("container", "image", "volume", "build-cache").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "type": 1 }, key))).optional() },
  responses: { 200: type({ LayersSize: type("number.integer"), Images: ImageSummary.array(), Containers: ContainerSummary.array(), Volumes: Volume.array(), BuildCache: BuildCache.array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "LayersSize": 1, "Images": 1, "Containers": 1, "Volumes": 1, "BuildCache": 1 }, key))).or(type({ LayersSize: type("number.integer"), Images: ImageSummary.array(), Containers: ContainerSummary.array(), Volumes: Volume.array(), BuildCache: BuildCache.array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "LayersSize": 1, "Images": 1, "Containers": 1, "Volumes": 1, "BuildCache": 1 }, key)))), 500: ErrorResponse.or(ErrorResponse) },
};

export type get_ImageGet = typeof get_ImageGet;
export const get_ImageGet = {
  method: type("'GET'"),
  path: type("'/images/{name}/get'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: type("unknown"), 500: type("unknown") },
};

export type get_ImageGetAll = typeof get_ImageGetAll;
export const get_ImageGetAll = {
  method: type("'GET'"),
  path: type("'/images/get'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ names: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "names": 1 }, key))).optional() },
  responses: { 200: type("unknown"), 500: type("unknown") },
};

export type post_ImageLoad = typeof post_ImageLoad;
export const post_ImageLoad = {
  method: type("'POST'"),
  path: type("'/images/load'"),
  requestFormat: type("'text'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ quiet: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "quiet": 1 }, key))).optional() },
  responses: { 200: type("unknown"), 500: ErrorResponse },
};

export type post_ContainerExec = typeof post_ContainerExec;
export const post_ContainerExec = {
  method: type("'POST'"),
  path: type("'/containers/{id}/exec'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: type({ AttachStdin: type("boolean"), AttachStdout: type("boolean"), AttachStderr: type("boolean"), ConsoleSize: type("number.integer >= 0").array().or(type("null")), DetachKeys: type("string"), Tty: type("boolean"), Env: type("string").array(), Cmd: type("string").array(), Privileged: "boolean = false", User: type("string"), WorkingDir: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "AttachStdin": 1, "AttachStdout": 1, "AttachStderr": 1, "ConsoleSize": 1, "DetachKeys": 1, "Tty": 1, "Env": 1, "Cmd": 1, "Privileged": 1, "User": 1, "WorkingDir": 1 }, key))).optional() },
  responses: { 201: IdResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ExecStart = typeof post_ExecStart;
export const post_ExecStart = {
  method: type("'POST'"),
  path: type("'/exec/{id}/start'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: type({ Detach: type("boolean"), Tty: type("boolean"), ConsoleSize: type("number.integer >= 0").array().or(type("null")) }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Detach": 1, "Tty": 1, "ConsoleSize": 1 }, key))).optional() },
  responses: { 200: type("unknown"), 404: type("unknown"), 409: type("unknown") },
};

export type post_ExecResize = typeof post_ExecResize;
export const post_ExecResize = {
  method: type("'POST'"),
  path: type("'/exec/{id}/resize'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ h: type("string.integer.parse"), w: type("string.integer.parse") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "h": 1, "w": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type("unknown"), 400: ErrorResponse.or(ErrorResponse), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type get_ExecInspect = typeof get_ExecInspect;
export const get_ExecInspect = {
  method: type("'GET'"),
  path: type("'/exec/{id}/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type({ CanRemove: type("boolean"), DetachKeys: type("string"), ID: type("string"), Running: type("boolean"), ExitCode: type("number.integer"), ProcessConfig: ProcessConfig, OpenStdin: type("boolean"), OpenStderr: type("boolean"), OpenStdout: type("boolean"), ContainerID: type("string"), Pid: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "CanRemove": 1, "DetachKeys": 1, "ID": 1, "Running": 1, "ExitCode": 1, "ProcessConfig": 1, "OpenStdin": 1, "OpenStderr": 1, "OpenStdout": 1, "ContainerID": 1, "Pid": 1 }, key))), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_VolumeList = typeof get_VolumeList;
export const get_VolumeList = {
  method: type("'GET'"),
  path: type("'/volumes'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))).optional() },
  responses: { 200: VolumeListResponse, 500: ErrorResponse },
};

export type post_VolumeCreate = typeof post_VolumeCreate;
export const post_VolumeCreate = {
  method: type("'POST'"),
  path: type("'/volumes/create'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: VolumeCreateOptions },
  responses: { 201: Volume, 500: ErrorResponse },
};

export type get_VolumeInspect = typeof get_VolumeInspect;
export const get_VolumeInspect = {
  method: type("'GET'"),
  path: type("'/volumes/{name}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: Volume, 404: ErrorResponse, 500: ErrorResponse },
};

export type put_VolumeUpdate = typeof put_VolumeUpdate;
export const put_VolumeUpdate = {
  method: type("'PUT'"),
  path: type("'/volumes/{name}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ version: type("string.integer.parse") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "version": 1 }, key))), path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))), body: type({ Spec: ClusterVolumeSpec }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Spec": 1 }, key))).optional() },
  responses: { 200: type("unknown"), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_VolumeDelete = typeof delete_VolumeDelete;
export const delete_VolumeDelete = {
  method: type("'DELETE'"),
  path: type("'/volumes/{name}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "force": 1 }, key))).optional(), path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 204: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 409: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_VolumePrune = typeof post_VolumePrune;
export const post_VolumePrune = {
  method: type("'POST'"),
  path: type("'/volumes/prune'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))).optional() },
  responses: { 200: type({ VolumesDeleted: type("string").array(), SpaceReclaimed: type("number.integer") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "VolumesDeleted": 1, "SpaceReclaimed": 1 }, key))), 500: ErrorResponse },
};

export type get_NetworkList = typeof get_NetworkList;
export const get_NetworkList = {
  method: type("'GET'"),
  path: type("'/networks'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))).optional() },
  responses: { 200: Network.array(), 500: ErrorResponse },
};

export type get_NetworkInspect = typeof get_NetworkInspect;
export const get_NetworkInspect = {
  method: type("'GET'"),
  path: type("'/networks/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ verbose: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), scope: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "verbose": 1, "scope": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: Network, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_NetworkDelete = typeof delete_NetworkDelete;
export const delete_NetworkDelete = {
  method: type("'DELETE'"),
  path: type("'/networks/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: type("unknown"), 403: ErrorResponse.or(ErrorResponse), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_NetworkCreate = typeof post_NetworkCreate;
export const post_NetworkCreate = {
  method: type("'POST'"),
  path: type("'/networks/create'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: type({ Name: type("string"), "CheckDuplicate?": type("boolean"), Driver: "string = \"bridge\"", "Internal?": type("boolean"), "Attachable?": type("boolean"), "Ingress?": type("boolean"), "IPAM?": IPAM, "EnableIPv6?": type("boolean"), "Options?": type({ "[string]": type("string") }), "Labels?": type({ "[string]": type("string") }) }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Name": 1, "CheckDuplicate": 1, "Driver": 1, "Internal": 1, "Attachable": 1, "Ingress": 1, "IPAM": 1, "EnableIPv6": 1, "Options": 1, "Labels": 1 }, key))) },
  responses: { 201: type({ Id: type("string"), Warning: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Id": 1, "Warning": 1 }, key))), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkConnect = typeof post_NetworkConnect;
export const post_NetworkConnect = {
  method: type("'POST'"),
  path: type("'/networks/{id}/connect'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: type({ Container: type("string"), EndpointConfig: EndpointSettings }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Container": 1, "EndpointConfig": 1 }, key))).optional() },
  responses: { 200: type("unknown"), 403: ErrorResponse.or(ErrorResponse), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_NetworkDisconnect = typeof post_NetworkDisconnect;
export const post_NetworkDisconnect = {
  method: type("'POST'"),
  path: type("'/networks/{id}/disconnect'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: type({ Container: type("string"), Force: type("boolean") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "Container": 1, "Force": 1 }, key))).optional() },
  responses: { 200: type("unknown"), 403: ErrorResponse.or(ErrorResponse), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_NetworkPrune = typeof post_NetworkPrune;
export const post_NetworkPrune = {
  method: type("'POST'"),
  path: type("'/networks/prune'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))).optional() },
  responses: { 200: type({ NetworksDeleted: type("string").array() }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "NetworksDeleted": 1 }, key))), 500: ErrorResponse },
};

export type get_PluginList = typeof get_PluginList;
export const get_PluginList = {
  method: type("'GET'"),
  path: type("'/plugins'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))).optional() },
  responses: { 200: Plugin.array(), 500: ErrorResponse },
};

export type get_GetPluginPrivileges = typeof get_GetPluginPrivileges;
export const get_GetPluginPrivileges = {
  method: type("'GET'"),
  path: type("'/plugins/privileges'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ remote: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "remote": 1 }, key))) },
  responses: { 200: PluginPrivilege.array().or(PluginPrivilege.array()), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_PluginPull = typeof post_PluginPull;
export const post_PluginPull = {
  method: type("'POST'"),
  path: type("'/plugins/pull'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ remote: type("string"), "name?": type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "remote": 1, "name": 1 }, key))), header: type({ "X-Registry-Auth": type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "X-Registry-Auth": 1 }, key))).optional(), body: PluginPrivilege.array() },
  responses: { 204: type("unknown"), 500: ErrorResponse },
};

export type get_PluginInspect = typeof get_PluginInspect;
export const get_PluginInspect = {
  method: type("'GET'"),
  path: type("'/plugins/{name}/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: Plugin.or(Plugin), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type delete_PluginDelete = typeof delete_PluginDelete;
export const delete_PluginDelete = {
  method: type("'DELETE'"),
  path: type("'/plugins/{name}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "force": 1 }, key))).optional(), path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: Plugin.or(Plugin), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_PluginEnable = typeof post_PluginEnable;
export const post_PluginEnable = {
  method: type("'POST'"),
  path: type("'/plugins/{name}/enable'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ timeout: type("string.integer.parse") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "timeout": 1 }, key))).optional(), path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_PluginDisable = typeof post_PluginDisable;
export const post_PluginDisable = {
  method: type("'POST'"),
  path: type("'/plugins/{name}/disable'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "force": 1 }, key))).optional(), path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_PluginUpgrade = typeof post_PluginUpgrade;
export const post_PluginUpgrade = {
  method: type("'POST'"),
  path: type("'/plugins/{name}/upgrade'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ remote: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "remote": 1 }, key))), path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))), header: type({ "X-Registry-Auth": type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "X-Registry-Auth": 1 }, key))).optional(), body: PluginPrivilege.array() },
  responses: { 204: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_PluginCreate = typeof post_PluginCreate;
export const post_PluginCreate = {
  method: type("'POST'"),
  path: type("'/plugins/create'"),
  requestFormat: type("'text'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 204: type("unknown"), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_PluginPush = typeof post_PluginPush;
export const post_PluginPush = {
  method: type("'POST'"),
  path: type("'/plugins/{name}/push'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type post_PluginSet = typeof post_PluginSet;
export const post_PluginSet = {
  method: type("'POST'"),
  path: type("'/plugins/{name}/set'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))), body: type("string").array() },
  responses: { 204: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse) },
};

export type get_NodeList = typeof get_NodeList;
export const get_NodeList = {
  method: type("'GET'"),
  path: type("'/nodes'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))).optional() },
  responses: { 200: Node.array().or(Node.array()), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type get_NodeInspect = typeof get_NodeInspect;
export const get_NodeInspect = {
  method: type("'GET'"),
  path: type("'/nodes/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: Node.or(Node), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type delete_NodeDelete = typeof delete_NodeDelete;
export const delete_NodeDelete = {
  method: type("'DELETE'"),
  path: type("'/nodes/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "force": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type post_NodeUpdate = typeof post_NodeUpdate;
export const post_NodeUpdate = {
  method: type("'POST'"),
  path: type("'/nodes/{id}/update'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ version: type("string.integer.parse") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "version": 1 }, key))), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: NodeSpec },
  responses: { 200: type("unknown"), 400: ErrorResponse.or(ErrorResponse), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type get_SwarmInspect = typeof get_SwarmInspect;
export const get_SwarmInspect = {
  method: type("'GET'"),
  path: type("'/swarm'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: Swarm.or(Swarm), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type post_SwarmInit = typeof post_SwarmInit;
export const post_SwarmInit = {
  method: type("'POST'"),
  path: type("'/swarm/init'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: type({ ListenAddr: type("string"), AdvertiseAddr: type("string"), DataPathAddr: type("string"), DataPathPort: type("number.integer"), DefaultAddrPool: type("string").array(), ForceNewCluster: type("boolean"), SubnetSize: type("number.integer"), Spec: SwarmSpec }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ListenAddr": 1, "AdvertiseAddr": 1, "DataPathAddr": 1, "DataPathPort": 1, "DefaultAddrPool": 1, "ForceNewCluster": 1, "SubnetSize": 1, "Spec": 1 }, key))).optional() },
  responses: { 200: type("string").or(type("string")), 400: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type post_SwarmJoin = typeof post_SwarmJoin;
export const post_SwarmJoin = {
  method: type("'POST'"),
  path: type("'/swarm/join'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: type({ ListenAddr: type("string"), AdvertiseAddr: type("string"), DataPathAddr: type("string"), RemoteAddrs: type("string").array(), JoinToken: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ListenAddr": 1, "AdvertiseAddr": 1, "DataPathAddr": 1, "RemoteAddrs": 1, "JoinToken": 1 }, key))).optional() },
  responses: { 200: type("unknown"), 400: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type post_SwarmLeave = typeof post_SwarmLeave;
export const post_SwarmLeave = {
  method: type("'POST'"),
  path: type("'/swarm/leave'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "force": 1 }, key))).optional() },
  responses: { 200: type("unknown"), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type post_SwarmUpdate = typeof post_SwarmUpdate;
export const post_SwarmUpdate = {
  method: type("'POST'"),
  path: type("'/swarm/update'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ version: type("string.integer.parse"), rotateWorkerToken: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), rotateManagerToken: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), rotateManagerUnlockKey: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "version": 1, "rotateWorkerToken": 1, "rotateManagerToken": 1, "rotateManagerUnlockKey": 1 }, key))), body: SwarmSpec },
  responses: { 200: type("unknown"), 400: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type get_SwarmUnlockkey = typeof get_SwarmUnlockkey;
export const get_SwarmUnlockkey = {
  method: type("'GET'"),
  path: type("'/swarm/unlockkey'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: type({ UnlockKey: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "UnlockKey": 1 }, key))).or(type({ UnlockKey: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "UnlockKey": 1 }, key)))), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type post_SwarmUnlock = typeof post_SwarmUnlock;
export const post_SwarmUnlock = {
  method: type("'POST'"),
  path: type("'/swarm/unlock'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: type({ UnlockKey: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "UnlockKey": 1 }, key))).optional() },
  responses: { 200: type("unknown"), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceList = typeof get_ServiceList;
export const get_ServiceList = {
  method: type("'GET'"),
  path: type("'/services'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string"), status: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1, "status": 1 }, key))).optional() },
  responses: { 200: Service.array().or(Service.array()), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type post_ServiceCreate = typeof post_ServiceCreate;
export const post_ServiceCreate = {
  method: type("'POST'"),
  path: type("'/services/create'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Registry-Auth": type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "X-Registry-Auth": 1 }, key))).optional(), body: ServiceSpec.and(type({ "[string]": type("unknown") })) },
  responses: { 201: type({ ID: type("string"), Warning: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "ID": 1, "Warning": 1 }, key))), 400: ErrorResponse, 403: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceInspect = typeof get_ServiceInspect;
export const get_ServiceInspect = {
  method: type("'GET'"),
  path: type("'/services/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ insertDefaults: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "insertDefaults": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: Service.or(Service), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type delete_ServiceDelete = typeof delete_ServiceDelete;
export const delete_ServiceDelete = {
  method: type("'DELETE'"),
  path: type("'/services/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type("unknown"), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type post_ServiceUpdate = typeof post_ServiceUpdate;
export const post_ServiceUpdate = {
  method: type("'POST'"),
  path: type("'/services/{id}/update'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ version: type("string.integer.parse"), registryAuthFrom: type.enumerated("spec", "previous-spec"), "rollback?": type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "version": 1, "registryAuthFrom": 1, "rollback": 1 }, key))), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), header: type({ "X-Registry-Auth": type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "X-Registry-Auth": 1 }, key))).optional(), body: ServiceSpec.and(type({ "[string]": type("unknown") })) },
  responses: { 200: ServiceUpdateResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceLogs = typeof get_ServiceLogs;
export const get_ServiceLogs = {
  method: type("'GET'"),
  path: type("'/services/{id}/logs'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ details: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), follow: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdout: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stderr: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), since: type("string.integer.parse"), timestamps: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), tail: "string = \"all\"" }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "details": 1, "follow": 1, "stdout": 1, "stderr": 1, "since": 1, "timestamps": 1, "tail": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type("unknown"), 404: type("unknown"), 500: type("unknown"), 503: type("unknown") },
};

export type get_TaskList = typeof get_TaskList;
export const get_TaskList = {
  method: type("'GET'"),
  path: type("'/tasks'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))).optional() },
  responses: { 200: Task.array(), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskInspect = typeof get_TaskInspect;
export const get_TaskInspect = {
  method: type("'GET'"),
  path: type("'/tasks/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: Task, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskLogs = typeof get_TaskLogs;
export const get_TaskLogs = {
  method: type("'GET'"),
  path: type("'/tasks/{id}/logs'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ details: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), follow: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdout: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stderr: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), since: type("string.integer.parse"), timestamps: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), tail: "string = \"all\"" }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "details": 1, "follow": 1, "stdout": 1, "stderr": 1, "since": 1, "timestamps": 1, "tail": 1 }, key))).optional(), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: type("unknown"), 404: type("unknown"), 500: type("unknown"), 503: type("unknown") },
};

export type get_SecretList = typeof get_SecretList;
export const get_SecretList = {
  method: type("'GET'"),
  path: type("'/secrets'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))).optional() },
  responses: { 200: Secret.array(), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretCreate = typeof post_SecretCreate;
export const post_SecretCreate = {
  method: type("'POST'"),
  path: type("'/secrets/create'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: SecretSpec.and(type({ "[string]": type("unknown") })) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SecretInspect = typeof get_SecretInspect;
export const get_SecretInspect = {
  method: type("'GET'"),
  path: type("'/secrets/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: Secret, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_SecretDelete = typeof delete_SecretDelete;
export const delete_SecretDelete = {
  method: type("'DELETE'"),
  path: type("'/secrets/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: type("unknown"), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretUpdate = typeof post_SecretUpdate;
export const post_SecretUpdate = {
  method: type("'POST'"),
  path: type("'/secrets/{id}/update'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ version: type("string.integer.parse") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "version": 1 }, key))), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: SecretSpec },
  responses: { 200: type("unknown"), 400: ErrorResponse.or(ErrorResponse), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type get_ConfigList = typeof get_ConfigList;
export const get_ConfigList = {
  method: type("'GET'"),
  path: type("'/configs'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "filters": 1 }, key))).optional() },
  responses: { 200: Config.array(), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigCreate = typeof post_ConfigCreate;
export const post_ConfigCreate = {
  method: type("'POST'"),
  path: type("'/configs/create'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: ConfigSpec.and(type({ "[string]": type("unknown") })) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigInspect = typeof get_ConfigInspect;
export const get_ConfigInspect = {
  method: type("'GET'"),
  path: type("'/configs/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 200: Config, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ConfigDelete = typeof delete_ConfigDelete;
export const delete_ConfigDelete = {
  method: type("'DELETE'"),
  path: type("'/configs/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))) },
  responses: { 204: type("unknown"), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigUpdate = typeof post_ConfigUpdate;
export const post_ConfigUpdate = {
  method: type("'POST'"),
  path: type("'/configs/{id}/update'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ version: type("string.integer.parse") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "version": 1 }, key))), path: type({ id: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "id": 1 }, key))), body: ConfigSpec },
  responses: { 200: type("unknown"), 400: ErrorResponse.or(ErrorResponse), 404: ErrorResponse.or(ErrorResponse), 500: ErrorResponse.or(ErrorResponse), 503: ErrorResponse.or(ErrorResponse) },
};

export type get_DistributionInspect = typeof get_DistributionInspect;
export const get_DistributionInspect = {
  method: type("'GET'"),
  path: type("'/distribution/{name}/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }).narrow((data) => Object.keys(data).every((key) => Object.prototype.hasOwnProperty.call({ "name": 1 }, key))) },
  responses: { 200: DistributionInspect, 401: ErrorResponse, 500: ErrorResponse },
};

export type post_Session = typeof post_Session;
export const post_Session = {
  method: type("'POST'"),
  path: type("'/session'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 101: type("unknown"), 400: type("unknown"), 500: type("unknown") },
};

// </Endpoints>

  
     // <EndpointByMethod>
     export const EndpointByMethod = {
     get: {
           "/containers/json": get_ContainerList,
"/containers/{id}/json": get_ContainerInspect,
"/containers/{id}/top": get_ContainerTop,
"/containers/{id}/logs": get_ContainerLogs,
"/containers/{id}/changes": get_ContainerChanges,
"/containers/{id}/export": get_ContainerExport,
"/containers/{id}/stats": get_ContainerStats,
"/containers/{id}/attach/ws": get_ContainerAttachWebsocket,
"/containers/{id}/archive": get_ContainerArchive,
"/images/json": get_ImageList,
"/images/{name}/json": get_ImageInspect,
"/images/{name}/history": get_ImageHistory,
"/images/search": get_ImageSearch,
"/info": get_SystemInfo,
"/version": get_SystemVersion,
"/_ping": get_SystemPing,
"/events": get_SystemEvents,
"/system/df": get_SystemDataUsage,
"/images/{name}/get": get_ImageGet,
"/images/get": get_ImageGetAll,
"/exec/{id}/json": get_ExecInspect,
"/volumes": get_VolumeList,
"/volumes/{name}": get_VolumeInspect,
"/networks": get_NetworkList,
"/networks/{id}": get_NetworkInspect,
"/plugins": get_PluginList,
"/plugins/privileges": get_GetPluginPrivileges,
"/plugins/{name}/json": get_PluginInspect,
"/nodes": get_NodeList,
"/nodes/{id}": get_NodeInspect,
"/swarm": get_SwarmInspect,
"/swarm/unlockkey": get_SwarmUnlockkey,
"/services": get_ServiceList,
"/services/{id}": get_ServiceInspect,
"/services/{id}/logs": get_ServiceLogs,
"/tasks": get_TaskList,
"/tasks/{id}": get_TaskInspect,
"/tasks/{id}/logs": get_TaskLogs,
"/secrets": get_SecretList,
"/secrets/{id}": get_SecretInspect,
"/configs": get_ConfigList,
"/configs/{id}": get_ConfigInspect,
"/distribution/{name}/json": get_DistributionInspect
         },
post: {
           "/containers/create": post_ContainerCreate,
"/containers/{id}/resize": post_ContainerResize,
"/containers/{id}/start": post_ContainerStart,
"/containers/{id}/stop": post_ContainerStop,
"/containers/{id}/restart": post_ContainerRestart,
"/containers/{id}/kill": post_ContainerKill,
"/containers/{id}/update": post_ContainerUpdate,
"/containers/{id}/rename": post_ContainerRename,
"/containers/{id}/pause": post_ContainerPause,
"/containers/{id}/unpause": post_ContainerUnpause,
"/containers/{id}/attach": post_ContainerAttach,
"/containers/{id}/wait": post_ContainerWait,
"/containers/prune": post_ContainerPrune,
"/build": post_ImageBuild,
"/build/prune": post_BuildPrune,
"/images/create": post_ImageCreate,
"/images/{name}/push": post_ImagePush,
"/images/{name}/tag": post_ImageTag,
"/images/prune": post_ImagePrune,
"/auth": post_SystemAuth,
"/commit": post_ImageCommit,
"/images/load": post_ImageLoad,
"/containers/{id}/exec": post_ContainerExec,
"/exec/{id}/start": post_ExecStart,
"/exec/{id}/resize": post_ExecResize,
"/volumes/create": post_VolumeCreate,
"/volumes/prune": post_VolumePrune,
"/networks/create": post_NetworkCreate,
"/networks/{id}/connect": post_NetworkConnect,
"/networks/{id}/disconnect": post_NetworkDisconnect,
"/networks/prune": post_NetworkPrune,
"/plugins/pull": post_PluginPull,
"/plugins/{name}/enable": post_PluginEnable,
"/plugins/{name}/disable": post_PluginDisable,
"/plugins/{name}/upgrade": post_PluginUpgrade,
"/plugins/create": post_PluginCreate,
"/plugins/{name}/push": post_PluginPush,
"/plugins/{name}/set": post_PluginSet,
"/nodes/{id}/update": post_NodeUpdate,
"/swarm/init": post_SwarmInit,
"/swarm/join": post_SwarmJoin,
"/swarm/leave": post_SwarmLeave,
"/swarm/update": post_SwarmUpdate,
"/swarm/unlock": post_SwarmUnlock,
"/services/create": post_ServiceCreate,
"/services/{id}/update": post_ServiceUpdate,
"/secrets/create": post_SecretCreate,
"/secrets/{id}/update": post_SecretUpdate,
"/configs/create": post_ConfigCreate,
"/configs/{id}/update": post_ConfigUpdate,
"/session": post_Session
         },
delete: {
           "/containers/{id}": delete_ContainerDelete,
"/images/{name}": delete_ImageDelete,
"/volumes/{name}": delete_VolumeDelete,
"/networks/{id}": delete_NetworkDelete,
"/plugins/{name}": delete_PluginDelete,
"/nodes/{id}": delete_NodeDelete,
"/services/{id}": delete_ServiceDelete,
"/secrets/{id}": delete_SecretDelete,
"/configs/{id}": delete_ConfigDelete
         },
put: {
           "/containers/{id}/archive": put_PutContainerArchive,
"/volumes/{name}": put_VolumeUpdate
         },
head: {
           "/containers/{id}/archive": head_ContainerArchiveInfo,
"/_ping": head_SystemPingHead
         }
     }
     export type EndpointByMethod = typeof EndpointByMethod;
     // </EndpointByMethod>
     

    // <EndpointByMethod.Shorthands>
    export type GetEndpoints = EndpointByMethod["get"]
export type PostEndpoints = EndpointByMethod["post"]
export type DeleteEndpoints = EndpointByMethod["delete"]
export type PutEndpoints = EndpointByMethod["put"]
export type HeadEndpoints = EndpointByMethod["head"]
    // </EndpointByMethod.Shorthands>
    
  
// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: unknown;
  header?: unknown;
  path?: unknown;
  cookie?: unknown;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | "trace" | MutationMethod;

export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
export type ResponseFormat = "json" | "sse";
export type SecurityRequirements = readonly (readonly string[])[];


    // <EndpointRequestFormats>
    /** Non-json request body encodings; missing entries default to `"json"`. */
    export const endpointRequestFormats = {
    post: {
          "/build": "binary",
"/images/create": "text",
"/images/load": "text",
"/plugins/create": "text"
        },
put: {
          "/containers/{id}/archive": "binary"
        }
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: RequestFormat }> }>;
    // </EndpointRequestFormats>
    

    // <EndpointParameterStyles>
    export type ParameterSerialization = { style: string; explode: boolean; allowReserved: boolean };
    export type EndpointParameterStyles = Partial<Record<"query" | "path" | "header" | "cookie", Record<string, ParameterSerialization>>>;
    /** OpenAPI parameter styles used by the built-in encoders. */
    export const endpointParameterStyles = {"get":{"/containers/json":{"query":{"all":{"style":"form","explode":true,"allowReserved":false},"limit":{"style":"form","explode":true,"allowReserved":false},"size":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false}}},"/containers/{id}/json":{"query":{"size":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/top":{"query":{"ps_args":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/logs":{"query":{"follow":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false},"since":{"style":"form","explode":true,"allowReserved":false},"until":{"style":"form","explode":true,"allowReserved":false},"timestamps":{"style":"form","explode":true,"allowReserved":false},"tail":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/changes":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/export":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/stats":{"query":{"stream":{"style":"form","explode":true,"allowReserved":false},"one-shot":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/attach/ws":{"query":{"detachKeys":{"style":"form","explode":true,"allowReserved":false},"logs":{"style":"form","explode":true,"allowReserved":false},"stream":{"style":"form","explode":true,"allowReserved":false},"stdin":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/archive":{"query":{"path":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/images/json":{"query":{"all":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false},"shared-size":{"style":"form","explode":true,"allowReserved":false},"digests":{"style":"form","explode":true,"allowReserved":false}}},"/images/{name}/json":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/images/{name}/history":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/images/search":{"query":{"term":{"style":"form","explode":true,"allowReserved":false},"limit":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false}}},"/events":{"query":{"since":{"style":"form","explode":true,"allowReserved":false},"until":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false}}},"/system/df":{"query":{"type":{"style":"form","explode":true,"allowReserved":false}}},"/images/{name}/get":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/images/get":{"query":{"names":{"style":"form","explode":false,"allowReserved":false}}},"/exec/{id}/json":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/volumes":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/volumes/{name}":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/networks":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/networks/{id}":{"query":{"verbose":{"style":"form","explode":true,"allowReserved":false},"scope":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/plugins/privileges":{"query":{"remote":{"style":"form","explode":true,"allowReserved":false}}},"/plugins/{name}/json":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/nodes":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/nodes/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/services":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false},"status":{"style":"form","explode":true,"allowReserved":false}}},"/services/{id}":{"query":{"insertDefaults":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/services/{id}/logs":{"query":{"details":{"style":"form","explode":true,"allowReserved":false},"follow":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false},"since":{"style":"form","explode":true,"allowReserved":false},"timestamps":{"style":"form","explode":true,"allowReserved":false},"tail":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/tasks":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/tasks/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/tasks/{id}/logs":{"query":{"details":{"style":"form","explode":true,"allowReserved":false},"follow":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false},"since":{"style":"form","explode":true,"allowReserved":false},"timestamps":{"style":"form","explode":true,"allowReserved":false},"tail":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/secrets":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/secrets/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/configs":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/configs/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/distribution/{name}/json":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}}},"post":{"/containers/create":{"query":{"name":{"style":"form","explode":true,"allowReserved":false},"platform":{"style":"form","explode":true,"allowReserved":false}}},"/containers/{id}/resize":{"query":{"h":{"style":"form","explode":true,"allowReserved":false},"w":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/start":{"query":{"detachKeys":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/stop":{"query":{"signal":{"style":"form","explode":true,"allowReserved":false},"t":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/restart":{"query":{"signal":{"style":"form","explode":true,"allowReserved":false},"t":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/kill":{"query":{"signal":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/update":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/rename":{"query":{"name":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/pause":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/unpause":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/attach":{"query":{"detachKeys":{"style":"form","explode":true,"allowReserved":false},"logs":{"style":"form","explode":true,"allowReserved":false},"stream":{"style":"form","explode":true,"allowReserved":false},"stdin":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/wait":{"query":{"condition":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/prune":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/build":{"query":{"dockerfile":{"style":"form","explode":true,"allowReserved":false},"t":{"style":"form","explode":true,"allowReserved":false},"extrahosts":{"style":"form","explode":true,"allowReserved":false},"remote":{"style":"form","explode":true,"allowReserved":false},"q":{"style":"form","explode":true,"allowReserved":false},"nocache":{"style":"form","explode":true,"allowReserved":false},"cachefrom":{"style":"form","explode":true,"allowReserved":false},"pull":{"style":"form","explode":true,"allowReserved":false},"rm":{"style":"form","explode":true,"allowReserved":false},"forcerm":{"style":"form","explode":true,"allowReserved":false},"memory":{"style":"form","explode":true,"allowReserved":false},"memswap":{"style":"form","explode":true,"allowReserved":false},"cpushares":{"style":"form","explode":true,"allowReserved":false},"cpusetcpus":{"style":"form","explode":true,"allowReserved":false},"cpuperiod":{"style":"form","explode":true,"allowReserved":false},"cpuquota":{"style":"form","explode":true,"allowReserved":false},"buildargs":{"style":"form","explode":true,"allowReserved":false},"shmsize":{"style":"form","explode":true,"allowReserved":false},"squash":{"style":"form","explode":true,"allowReserved":false},"labels":{"style":"form","explode":true,"allowReserved":false},"networkmode":{"style":"form","explode":true,"allowReserved":false},"platform":{"style":"form","explode":true,"allowReserved":false},"target":{"style":"form","explode":true,"allowReserved":false},"outputs":{"style":"form","explode":true,"allowReserved":false}},"header":{"Content-type":{"style":"simple","explode":false,"allowReserved":false},"X-Registry-Config":{"style":"simple","explode":false,"allowReserved":false}}},"/build/prune":{"query":{"keep-storage":{"style":"form","explode":true,"allowReserved":false},"all":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false}}},"/images/create":{"query":{"fromImage":{"style":"form","explode":true,"allowReserved":false},"fromSrc":{"style":"form","explode":true,"allowReserved":false},"repo":{"style":"form","explode":true,"allowReserved":false},"tag":{"style":"form","explode":true,"allowReserved":false},"message":{"style":"form","explode":true,"allowReserved":false},"changes":{"style":"form","explode":false,"allowReserved":false},"platform":{"style":"form","explode":true,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/images/{name}/push":{"query":{"tag":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/images/{name}/tag":{"query":{"repo":{"style":"form","explode":true,"allowReserved":false},"tag":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/images/prune":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/commit":{"query":{"container":{"style":"form","explode":true,"allowReserved":false},"repo":{"style":"form","explode":true,"allowReserved":false},"tag":{"style":"form","explode":true,"allowReserved":false},"comment":{"style":"form","explode":true,"allowReserved":false},"author":{"style":"form","explode":true,"allowReserved":false},"pause":{"style":"form","explode":true,"allowReserved":false},"changes":{"style":"form","explode":true,"allowReserved":false}}},"/images/load":{"query":{"quiet":{"style":"form","explode":true,"allowReserved":false}}},"/containers/{id}/exec":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/exec/{id}/start":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/exec/{id}/resize":{"query":{"h":{"style":"form","explode":true,"allowReserved":false},"w":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/volumes/prune":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/networks/{id}/connect":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/networks/{id}/disconnect":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/networks/prune":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/plugins/pull":{"query":{"remote":{"style":"form","explode":true,"allowReserved":false},"name":{"style":"form","explode":true,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}/enable":{"query":{"timeout":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}/disable":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}/upgrade":{"query":{"remote":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/create":{"query":{"name":{"style":"form","explode":true,"allowReserved":false}}},"/plugins/{name}/push":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}/set":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/nodes/{id}/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/swarm/leave":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}}},"/swarm/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false},"rotateWorkerToken":{"style":"form","explode":true,"allowReserved":false},"rotateManagerToken":{"style":"form","explode":true,"allowReserved":false},"rotateManagerUnlockKey":{"style":"form","explode":true,"allowReserved":false}}},"/services/create":{"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/services/{id}/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false},"registryAuthFrom":{"style":"form","explode":true,"allowReserved":false},"rollback":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/secrets/{id}/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/configs/{id}/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}}},"delete":{"/containers/{id}":{"query":{"v":{"style":"form","explode":true,"allowReserved":false},"force":{"style":"form","explode":true,"allowReserved":false},"link":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/images/{name}":{"query":{"force":{"style":"form","explode":true,"allowReserved":false},"noprune":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/volumes/{name}":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/networks/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/nodes/{id}":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/services/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/secrets/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/configs/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}}},"put":{"/containers/{id}/archive":{"query":{"path":{"style":"form","explode":true,"allowReserved":false},"noOverwriteDirNonDir":{"style":"form","explode":true,"allowReserved":false},"copyUIDGID":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/volumes/{name}":{"query":{"version":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}}},"head":{"/containers/{id}/archive":{"query":{"path":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}}}} as Partial<Record<string, Partial<Record<string, EndpointParameterStyles>>>>;
    // </EndpointParameterStyles>
    

    // <EndpointResponseFormats>
    /** Non-json response body modes; missing entries default to `"json"`. SSE skips JSON parse + output validation. */
    export const endpointResponseFormats = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: ResponseFormat }> }>;
    // </EndpointResponseFormats>
    

    // <EndpointSecurityRequirements>
    /** OpenAPI security requirements applied when an endpoint has no explicit entry. */
    export const defaultSecurityRequirements = [] as SecurityRequirements;
    /** Endpoint-specific security requirements that differ from the default. */
    export const endpointSecurityRequirements = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: SecurityRequirements }> }>;
    // </EndpointSecurityRequirements>
    

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  responses?: Record<string, unknown>;
  responseHeaders?: Record<string, unknown>;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  requestFormat: RequestFormat;
  responseFormat: ResponseFormat;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"]
};

/**
 * Minimal response surface used by ApiClient — avoids depending on the DOM `Response`
 * global (helpful for Node without DOM lib). Structural typing accepts fetch Response.
 */
export interface FetcherResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: {
    get(name: string): string | null;
    getSetCookie?: () => string[];
  };
  /** Present on fetch Response; used for SSE / streaming bodies. */
  body?: ReadableStream<Uint8Array> | null;
  json(): Promise<unknown>;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  clone(): FetcherResponse;
}

export interface Fetcher {
    decodePathParams?: (path: string, pathParams: unknown, styles?: Record<string, ParameterSerialization>) => string
  encodeSearchParams?: (searchParams: unknown, styles?: Record<string, ParameterSerialization>) => URLSearchParams | undefined
  /** Merge cookie params into request headers (default: Cookie header). */
  encodeCookies?: (cookies: unknown, headers: Headers) => void
    //
    fetch: (input: {
      method: Method;
      url: URL;
      urlSearchParams?: URLSearchParams | undefined;
      parameters?: EndpointParameters | undefined;
      path: string;
      /** How to encode `parameters.body` (from OpenAPI requestBody content type). */
      requestFormat: RequestFormat;
      /** OpenAPI parameter serialization metadata for the current endpoint. */
      parameterStyles?: EndpointParameterStyles;
      /** OpenAPI security requirements for this operation. Empty means no credentials are required. */
      security?: SecurityRequirements;
      overrides?: RequestInit;
      throwOnStatusError?: boolean
    }) => Promise<FetcherResponse>;
    parseResponseData?: (response: FetcherResponse) => Promise<unknown>
}

export const successStatusCodes = [200,201,202,203,204,205,206,207,208,226,300,301,302,303,304,305,306,307,308] as const;
export type SuccessStatusCode = typeof successStatusCodes[number];

export const errorStatusCodes = [400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,421,422,423,424,425,426,428,429,431,451,500,501,502,503,504,505,506,507,508,510,511] as const;
export type ErrorStatusCode = typeof errorStatusCodes[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues = unknown> extends Omit<Headers, 'append' | 'delete' | 'get' | 'getSetCookie' | 'has' | 'set' | 'forEach'> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[]
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => boolean
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  forEach: (callbackfn: (value: TypedHeaderValues[keyof TypedHeaderValues] | string & {}, key: Extract<keyof TypedHeaderValues, string> | string & {}, parent: TypedHeaders<TypedHeaderValues>) => void, thisArg?: unknown) => void
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

type StatusCodeFromKey<TKey> = TKey extends `${infer TStatusCode extends number}`
  ? TStatusCode
  : TKey extends number
    ? TKey
    : never;

export type TypedApiResponse<TAllResponses = {}, THeaders = {}> = {
  [K in keyof TAllResponses]: StatusCodeFromKey<K> extends infer TStatusCode extends number
    ? TStatusCode extends SuccessStatusCode
      ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
      : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
    : never;
}[keyof TAllResponses];

type OptionalUndefinedKeys<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: Exclude<T[K], undefined>;
};
export type InferSchemaValue<T> = T extends { infer: infer O } ? O : T extends (...args: never[]) => unknown ? T : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInputRaw<T> = T extends { inferIn: infer I } ? I : T extends (...args: never[]) => unknown ? T : T extends object ? { [K in keyof T]: InferSchemaInputRaw<T[K]> } : T;
type InferSchemaInput<T> = OptionalUndefinedKeys<InferSchemaInputRaw<T>>;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string | number, unknown>
    ? TypedApiResponse<InferSchemaValue<TResponses>, TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never>
    : never
  : never

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<SafeApiResponse<TEndpoint>, { status: TStatusCode }>

/**
 * Success-body payload — InferSchemaValue only on success statuses.
 * Filter with extends {} like the old Extract { data: {} } so unknown bodies (e.g. 304) drop out.
 */
export type InferSuccessData<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? {
      [K in keyof TResponses]: StatusCodeFromKey<K> extends infer TStatusCode extends number
        ? TStatusCode extends SuccessStatusCode
          ? Extract<InferSchemaValue<TResponses[K]>, {}>
          : never
        : never;
    }[keyof TResponses]
  : never;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

export type ApiQueryOptions = {
  /** Override whether a generated TanStack Query consumes TanStack Query's AbortSignal. */
  consumeQuerySignal?: boolean;
};

/** Call options merged onto inferred endpoint parameters. */
type ApiRequestOptions = {
  overrides?: RequestInit;
  queryOptions?: ApiQueryOptions;
  withResponse?: boolean;
  throwOnStatusError?: boolean;
  validate?: ValidateSide;
};

/** Parameter bag for an endpoint + request options. */
export type ApiCallParams<TEndpoint> = TEndpoint extends { parameters: infer UParams }
  ? NotNever<InferSchemaInput<UParams>> extends true
    ? InferSchemaInput<UParams> & ApiRequestOptions
    : ApiRequestOptions
  : ApiRequestOptions;

/** Resolve response type from withResponse flag on the call config. */
export type ApiCallResult<TEndpoint, TParams> = TParams extends { withResponse: true }
  ? SafeApiResponse<TEndpoint>
  : InferSuccessData<TEndpoint>;

export type ValidateSide = "none" | "input" | "output" | "both";
export type OnValidate = (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
}) => unknown | Promise<unknown>;

// </ApiClientTypes>

// <TypedStatusError>
export class TypedStatusError<TData = unknown> extends Error {
  response: TypedErrorResponse<TData, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<TData, ErrorStatusCode, unknown>) {
    super(`HTTP ${response.status}: ${response.statusText}`);
    this.name = 'TypedStatusError';
    this.response = response;
    this.status = response.status;
  }
}
// </TypedStatusError>


// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return (() => { const out = (schema as (data: unknown) => unknown)(value); if (out instanceof type.errors) throw out; return out; })();
};

const runValidate = async (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
  onValidate?: OnValidate;
}): Promise<unknown> => {
  if (ctx.onValidate) return ctx.onValidate(ctx);
  return defaultParse(ctx.schema, ctx.value);
};
// </ValidateHelpers>



// <ApiClient>
export class ApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = "both";
  onValidate?: OnValidate;

  constructor(
    public fetcher: Fetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate },
  ) {
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  setValidate(validate: ValidateSide) {
    this.validate = validate;
    return this;
  }

  setOnValidate(onValidate: OnValidate | undefined) {
    if (onValidate === undefined) {
      delete this.onValidate;
    } else {
      this.onValidate = onValidate;
    }
    return this;
  }

  /**
   * Replace path parameters in URL
   * Supports both OpenAPI format {param} and Express format :param
   */
  defaultDecodePathParams = (url: string, params: unknown, styles?: Record<string, ParameterSerialization>): string => {
    const record = (params ?? {}) as Record<string, unknown>;
    const encode = (value: unknown) => encodeURIComponent(String(value));
    const serialize = (key: string, value: unknown): string => {
      const parameterStyle = styles?.[key];
      const style = parameterStyle?.style ?? "simple";
      const explode = parameterStyle?.explode ?? false;
      if (style === "label") {
        if (Array.isArray(value)) return "." + value.filter((item) => item != null).map(encode).join(explode ? "." : ",");
        if (value && typeof value === "object") {
          const entries = Object.entries(value as Record<string, unknown>).filter(([, item]) => item != null);
          return "." + (explode ? entries.map(([name, item]) => encode(name) + "=" + encode(item)).join(".") : entries.flatMap(([name, item]) => [encode(name), encode(item)]).join(","));
        }
        return "." + encode(value);
      }
      if (style === "matrix") {
        if (Array.isArray(value)) return explode ? value.filter((item) => item != null).map((item) => ";" + key + "=" + encode(item)).join("") : ";" + key + "=" + value.filter((item) => item != null).map(encode).join(",");
        if (value && typeof value === "object") {
          const entries = Object.entries(value as Record<string, unknown>).filter(([, item]) => item != null);
          return explode ? entries.map(([name, item]) => ";" + encode(name) + "=" + encode(item)).join("") : ";" + key + "=" + entries.flatMap(([name, item]) => [encode(name), encode(item)]).join(",");
        }
        return ";" + key + "=" + encode(value);
      }
      if (Array.isArray(value)) return value.filter((item) => item != null).map(encode).join(",");
      if (value && typeof value === "object") {
        return Object.entries(value as Record<string, unknown>)
          .filter(([, item]) => item != null)
          .map(([name, item]) => explode ? encode(name) + "=" + encode(item) : [encode(name), encode(item)])
          .flat()
          .join(",");
      }
      return encode(value);
    };
    return url
      .replace(/{([^}]+)}/g, (_, key: string) =>
        record[key] != null ? serialize(key, record[key]) : `{${key}}`,
      )
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) =>
        record[key] != null ? serialize(key, record[key]) : `:${key}`,
      );
  }

  /** Uses URLSearchParams, skips null/undefined values */
  defaultEncodeSearchParams = (queryParams: unknown, styles?: Record<string, ParameterSerialization>): URLSearchParams | undefined => {
    if (!queryParams || typeof queryParams !== "object") return;

    const searchParams = new URLSearchParams();
    const rawEntries: Array<{ key: string; value: string; allowReserved: boolean }> = [];
    const append = (key: string, value: unknown, allowReserved = false) => {
      const stringValue = String(value);
      searchParams.append(key, stringValue);
      rawEntries.push({ key, value: stringValue, allowReserved });
    };
    const encodeQueryComponent = (value: string, allowReserved: boolean) => {
      const encoded = encodeURIComponent(value);
      return allowReserved
        ? encoded.replace(/%3A|%2F|%3F|%40|%21|%24|%26|%27|%28|%29|%2A|%2B|%2C|%3B|%3D|%5B|%5D/gi, (part) => decodeURIComponent(part))
        : encoded;
    };
    Object.defineProperty(searchParams, "toString", {
      value: () => rawEntries.map(({ key, value, allowReserved }) => `${encodeQueryComponent(key, false)}=${encodeQueryComponent(value, allowReserved)}`).join("&"),
    });
    Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
      if (value != null) {
        // Skip null/undefined values
        const parameterStyle = styles?.[key];
        const style = parameterStyle?.style ?? "form";
        const explode = parameterStyle?.explode ?? true;
        const allowReserved = parameterStyle?.allowReserved === true;
        if (Array.isArray(value)) {
          if (style === "spaceDelimited") append(key, value.filter((item) => item != null).map(String).join(" "), allowReserved);
          else if (style === "pipeDelimited") append(key, value.filter((item) => item != null).map(String).join("|"), allowReserved);
          else if (explode) value.forEach((val) => val != null && append(key, val, allowReserved));
          else append(key, value.filter((item) => item != null).map(String).join(","), allowReserved);
        } else if (typeof value === "object") {
          const entries = Object.entries(value as Record<string, unknown>).filter(([, nestedValue]) => nestedValue != null);
          if (style === "deepObject") {
            for (const [nestedKey, nestedValue] of entries) {
              if (Array.isArray(nestedValue)) nestedValue.forEach((item) => item != null && append(`${key}[${nestedKey}]`, item, allowReserved));
              else append(`${key}[${nestedKey}]`, nestedValue, allowReserved);
            }
          } else if (explode) {
            for (const [nestedKey, nestedValue] of entries) {
              if (Array.isArray(nestedValue)) nestedValue.forEach((item) => item != null && append(nestedKey, item, allowReserved));
              else append(nestedKey, nestedValue, allowReserved);
            }
          } else {
            append(key, entries.flatMap(([nestedKey, nestedValue]) => [nestedKey, ...(Array.isArray(nestedValue) ? nestedValue : [nestedValue])]).map(String).join(","), allowReserved);
          }
        } else {
          append(key, value, allowReserved);
        }
      }
    });

    return searchParams;
  }

  /** Append cookie params as a Cookie header (or merge into existing). */
  defaultEncodeCookies = (cookies: unknown, headers: Headers): void => {
    if (!cookies || typeof cookies !== "object") return;
    const parts = Object.entries(cookies as Record<string, unknown>)
      .filter(([, value]) => value != null)
      .map(([key, value]) => `${key}=${String(value)}`);
    if (!parts.length) return;
    const existing = headers.get("cookie");
    headers.set("cookie", existing ? `${existing}; ${parts.join("; ")}` : parts.join("; "));
  }

  defaultParseResponseData = async (response: FetcherResponse): Promise<unknown> => {
    const contentType = response.headers.get("content-type") ?? "";
    const normalizedContentType = contentType.toLowerCase();
    if (normalizedContentType.includes("text/event-stream")) {
      return response.body ?? null;
    }
    if (normalizedContentType.startsWith("text/")) {
      return (await response.text())
    }

    if (normalizedContentType.startsWith("application/octet-stream")) {
      return new Blob([await response.arrayBuffer()])
    }

    if (
      normalizedContentType.includes("application/json") ||
      (normalizedContentType.includes("application/") && normalizedContentType.includes("json")) ||
      normalizedContentType === "*/*"
      ) {
      try {
        return await response.json();
      } catch {
        return undefined
      }
    }

    return
  }

  // <ApiClient.get>
    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    get<Path extends keyof GetEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("get", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.get>
    
// <ApiClient.post>
    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    post<Path extends keyof PostEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("post", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.post>
    
// <ApiClient.delete>
    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    delete<Path extends keyof DeleteEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("delete", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.delete>
    
// <ApiClient.put>
    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    put<Path extends keyof PutEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("put", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.put>
    
// <ApiClient.head>
    head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    head<Path extends keyof HeadEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("head", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.head>
    

    // <ApiClient.request>
    /**
     * Generic request method with full type-safety for any endpoint
     */
    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<InferSchemaInput<UParams>> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: [config?: unknown]
    ): Promise<unknown> {
      return (async () => {
      const requestParams = params[0] as
        | (EndpointParameters & {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse?: boolean;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          })
        | undefined;
      const withResponse = requestParams?.withResponse;
      const throwOnStatusError = requestParams?.throwOnStatusError ?? (withResponse ? false : true);
      let overrides = requestParams?.overrides;
      const validateSide: ValidateSide = requestParams?.validate ?? this.validate;

      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;

      type RuntimeEndpoint = {
        parameters?: Partial<Record<"body" | "query" | "header" | "path" | "cookie", unknown>>;
        responses?: Record<string, unknown>;
      };
      const endpointSchema = EndpointByMethod[method][path] as RuntimeEndpoint;
      const shouldValidateInput = validateSide === "input" || validateSide === "both";
      if (shouldValidateInput && endpointSchema.parameters) {
        const paramSchema = endpointSchema.parameters;
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = paramSchema[key];
          const value = parametersToSend[key];
          if (schema !== undefined && value !== undefined) {
            parametersToSend[key] = await runValidate({
              side: "input",
              method: String(method),
              path: String(path),
              schema,
              value,
              ...(this.onValidate ? { onValidate: this.onValidate } : {}),
            });
          }
        }
      }

      const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(
        this.baseUrl + (path as string),
        parametersToSend.path ?? {},
        endpointParameterStyles[method]?.[path]?.path,
      );
      const url = new URL(resolvedPath);
      const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(
        parametersToSend.query,
        endpointParameterStyles[method]?.[path]?.query,
      );

      if (parametersToSend.cookie) {
        const headers = new Headers((overrides as RequestInit | undefined)?.headers);
        (this.fetcher.encodeCookies ?? this.defaultEncodeCookies)(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const parameterStyles = endpointParameterStyles[method]?.[path as string];
      const response = await this.fetcher.fetch({
        method: method,
        path: (path as string),
        url,
        ...(urlSearchParams ? { urlSearchParams } : {}),
        ...(Object.keys(parametersToSend).length ? { parameters: parametersToSend } : {}),
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        ...(parameterStyles ? { parameterStyles } : {}),
        security: endpointSecurityRequirements[method]?.[path] ?? defaultSecurityRequirements,
        ...(overrides ? { overrides } : {}),
        throwOnStatusError
      });
          const responseFormat = endpointResponseFormats[method]?.[path] ?? "json";
          let data =
            responseFormat === "sse"
              ? (response.body ?? null)
              : await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
          const shouldValidateOutput = validateSide === "output" || validateSide === "both";
          if (
            shouldValidateOutput &&
            responseFormat !== "sse" &&
            (response.ok || !(errorStatusCodes as readonly number[]).includes(response.status)) &&
            endpointSchema?.responses
          ) {
            const responseSchema =
              endpointSchema.responses[String(response.status)] ??
              endpointSchema.responses[String(Math.floor(response.status / 100)) + "xx"] ??
              endpointSchema.responses[String(Math.floor(response.status / 100)) + "XX"] ??
              endpointSchema.responses["default"];
            if (responseSchema) {
              data = await runValidate({
                side: "output",
                method: String(method),
                path: String(path),
                schema: responseSchema,
                value: data,
                ...(this.onValidate ? { onValidate: this.onValidate } : {}),
              });
            }
          }
          const typedResponse = Object.assign(response, {
            data: data,
            json: () => Promise.resolve(data)
          }) as SafeApiResponse<TEndpoint>;

          if (throwOnStatusError && (errorStatusCodes as readonly number[]).includes(response.status)) {
            throw new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>);
          }

          return withResponse ? typedResponse : data;
      })()
    }
    // </ApiClient.request>
}

export function createApiClient(
  fetcher: Fetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate },
) {
  return new ApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
}


/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));

 // With error handling
 const result = await api.get("/users/{id}", { path: { id: "123" }, withResponse: true });
 if (result.ok) {
   // Access data directly
   const user = result.data;
   console.log(user);

   // Or use the json() method for compatibility
   const userFromJson = await result.json();
   console.log(userFromJson);
 } else {
   const error = result.data;
   console.error(`Error ${result.status}:`, error);
 }
*/

// </ApiClient>

  